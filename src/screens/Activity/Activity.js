import { View, Text } from 'react-native'
import React from 'react'
import AuthChecker from '../../utils/authChecker/AuthChecker'

const Activity = () => {
  return (
    <View>
      <Text>Activity</Text>
    </View>
  )
}

export default AuthChecker(Activity);