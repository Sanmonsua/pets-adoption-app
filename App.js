import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import SearchLocationScreen from './screens/SearchLocationScreen'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					options={{ headerShown: false }}
					name="Home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="SearchLocation"
					component={SearchLocationScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
