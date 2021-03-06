import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import HomeScreen from './screens/HomeScreen'
import SearchLocationScreen from './screens/SearchLocationScreen'
import AnimalScreen from './screens/AnimalScreen'

const Stack = createStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
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
					<Stack.Screen
						options={{ headerShown: false }}
						name="Animal"
						component={AnimalScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
