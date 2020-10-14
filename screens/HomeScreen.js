import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { types, location } from '../mockData'
import Location from '../components/Location'
import AnimalTypesList from '../components/AnimalTypesList'

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Location {...location} />
			<AnimalTypesList types={types} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		justifyContent: 'center',
		flex: 1,
	},
})
