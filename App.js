import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import {PaperProvider, DefaultTheme} from 'react-native-paper';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#03753C',
  },
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <NavigationContainer>
         <PaperProvider theme={customTheme}>
          <AuthNavigator />
         </PaperProvider>
       </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
