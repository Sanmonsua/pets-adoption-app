import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { types } from '../mockData'
import AnimalTypesList from '../components/AnimalTypesList'

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>Location</Text>
			<Text>California, US</Text>
			<AnimalTypesList types={types} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		justifyContent: 'center',
	},
})
