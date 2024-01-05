import { View, Text } from 'react-native'
import React from 'react'
import AuthChecker from '../../utils/authChecker/AuthChecker'


const Paramarsh = () => {
  return (
    <View>
      <Text>Paramarsh</Text>
    </View>
  )
}

export default AuthChecker(Paramarsh);