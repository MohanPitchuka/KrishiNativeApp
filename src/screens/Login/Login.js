import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React from 'react';
import {useState, useEffect} from 'react';
import {Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useMutation} from '@tanstack/react-query';
import {KRISHI_BACKEND_IP} from '../../utils/constants/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getToken} from '../../utils/getToken/getToken';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = [];
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const [countDownTime, setCountDownTime] = useState(30);
  const [startTimer, setStartTimer] = useState(false);
  const [clickedResendOtp, setClickedResendOtp] = useState(false);

  const login = useMutation({
    mutationFn: async data =>
      await axios({
        method: 'POST',
        url: `${KRISHI_BACKEND_IP}/api/v1/accounts/get-otp/`,
        headers: {
          'content-type': 'application/json',
        },
        data: data,
      }),
  });

  const verifyOTP = useMutation({
    mutationFn: async data =>
      await axios({
        method: 'POST',
        url: `${KRISHI_BACKEND_IP}/api/v1/accounts/login-otp/`,
        headers: {
          'content-type': 'application/json',
        },
        data: data,
      }),
  });

  const handleLogin = async () => {
    try {
      await login.mutate(
        {username: mobileNumber},
        {
          onSuccess: data => {},
          onError: data => {
            console.log('Login api call failed - ', data);
          },
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleOTPSubmit = async () => {
    try {
      await verifyOTP.mutate(
        {username: mobileNumber, otp: otp.join('')},
        {
          onSuccess: async data => {
            if (data.status === 201 || data.status === 200) {
              await AsyncStorage.setItem(
                'krishiAuthToken',
                data.data.response.payload.token,
              );
              await AsyncStorage.setItem('isAuthenticated', 'true');
              await AsyncStorage.setItem(
                'accountNumber',
                data.data.response.payload.account_number,
              );
              const isAuthenticated = await AsyncStorage.getItem(
                'isAuthenticated',
              );
              navigation.reset({
                index: 0,
                routes: [{name: 'HomeScreen'}],
              });
              toggleModal();
            }
          },
          onError: data => console.log('verify OTP api call failed -', data),
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleResendOTP = () => {
    console.log('clicked resend otp');
    setCountDownTime(30);
    setClickedResendOtp(true);
    handleLogin();
  };

  useEffect(() => {
    if (startTimer) {
      if (countDownTime !== 0) {
        setTimeout(() => {
          setCountDownTime(countDownTime - 1);
        }, 1000);
      }
    }
  }, [countDownTime]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to JioKrishi</Text>
        <TextInput
          label="Enter Your Mobile Number"
          style={styles.noPaddingInput}
          placeholder=""
          value={mobileNumber}
          onChangeText={mobileNumber => {
            setMobileNumber(mobileNumber);
          }}
          maxLength={10}
          keyboardType="number-pad"
        />
      </View>

      <Modal
        animationType="none" // or "fade" or "none" or "slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '50%',
              padding: 40,
            }}>
            <Text style={styles.title}>Enter OTP</Text>
            <Text style={{color: '#000000', fontSize: 14}}>
              Please enter the OTP sent to Your Mobile no.
            </Text>
            <Text style={{color: '#000000', fontSize: 14}}>{mobileNumber}</Text>
            <Button
              mode="outlined"
              style={{
                alignSelf: 'flex-start',
                borderColor: '#999999',
                borderRadius: 24,
                borderWidth: 2,
                marginTop: 20,
              }}
              labelStyle={{
                color: '#03753C',
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 24,
                letterSpacing: 0.08,
              }}
              onPress={() => {
                toggleModal();
                setCountDownTime(30);
              }}>
              CHANGE MOBILE NUMBER
            </Button>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.box}
                  maxLength={1}
                  keyboardType="numeric"
                  onChangeText={value => handleOtpChange(value, index)}
                  value={digit}
                  ref={input => {
                    inputs[index] = input;
                  }}
                />
              ))}
            </View>
            <Text
              style={{
                color: '#03753C',
                fontSize: 16,
                lineHeight: 24,
                letterSpacing: 0.08,
                fontWeight: '600',
              }}>
              {clickedResendOtp === true
                ? 'OTP send to Mobile Number Successfully.'
                : ''}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              {countDownTime !== 0 ? (
                <Text
                  style={{
                    paddingRight: 16,
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '500',
                    lineHeight: 24,
                    letterSpacing: 0.08,
                  }}>
                  Wait for {countDownTime} sec
                </Text>
              ) : (
                <Text></Text>
              )}
              {countDownTime !== 0 ? (
                <TouchableOpacity disabled={true}>
                  <Text
                    style={{
                      color: countDownTime !== 0 ? '#aaaaaa' : '#03753C',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 24,
                      letterSpacing: 0.08,
                    }}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleResendOTP}>
                  <Text
                    style={{
                      color: countDownTime !== 0 ? '#aaaaaa' : '#03753C',
                      fontSize: 14,
                      fontWeight: '700',
                      lineHeight: 24,
                      letterSpacing: 0.08,
                    }}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {otp.every(value => value !== '') ? (
              <Button
                mode="contained-tonal"
                onPress={() => {
                  handleOTPSubmit();
                }}
                style={styles.button}>
                <Text style={{color: 'white'}}>SUBMIT OTP</Text>
              </Button>
            ) : (
              <Button
                mode="contained-tonal"
                disabled
                onPress={() => {}}
                style={styles.disabledButton}>
                <Text style={{color: '#97a79b'}}>SUBMIT OTP</Text>
              </Button>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        <Text style={styles.footerText}>By continuing you agree to our</Text>
        <Text style={styles.footerTerms}>
          Terms & Conditions <Text style={styles.footerText}>and</Text> Privacy
          Policy
        </Text>
        {mobileNumber.length === 10 ? (
          <Button
            mode="contained-tonal"
            onPress={() => {
              handleLogin();
              toggleModal();
              setStartTimer(true);
              setCountDownTime(countDownTime - 1);
            }}
            style={styles.button}>
            <Text style={{color: 'white'}}>SEND OTP</Text>
          </Button>
        ) : (
          <Button
            mode="contained-tonal"
            disabled
            onPress={() => {}}
            style={styles.disabledButton}>
            <Text style={{color: '#97a79b'}}>SEND OTP</Text>
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '20%',
    height: 40,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems: ,
  },
  modalInnerContainer: {},
  keyboardView: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: 'pink',
    borderWidth: 5,
  },
  container: {
    padding: 20,
    paddingTop: 80,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#141414',
    paddingBottom: 20,
    lineHeight: 28,
    letterSpacing: 1.02,
  },
  inputContainerStyle: {
    margin: 8,
  },
  inputContentStyle: {
    paddingLeft: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  noPaddingInput: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  disabledButton: {
    backgroundColor: 'rgba(3, 117, 60, 0.11)',
    width: '90%',
    margin: -10,
  },
  button: {
    backgroundColor: '#03753C',
    color: 'white',
    width: '90%',
    margin: -10,
  },
  footerTerms: {
    color: '#03753C',
    fontSize: 14,
    paddingBottom: 24,
  },
  footerText: {
    color: 'rgba(20, 20, 20, 1)',
    fontSize: 14,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default Login;
