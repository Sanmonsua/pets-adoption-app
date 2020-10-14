import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'

import { types, location } from '../mockData'
import { searchAnimals } from '../api/animals'
import Location from '../components/Location'
import AnimalTypesList from '../components/AnimalTypesList'
import AnimalsList from '../components/AnimalsList'

export default function HomeScreen({ navigation }) {
	var [animals, setAnimals] = useState([])

	useEffect(() => {
		getAnimals()

		async function getAnimals() {
			let results = await searchAnimals()
			setAnimals(results)
		}
	}, [])

	useEffect(() => {
		console.log(animals), [animals]
	})

	return (
		<View style={styles.container}>
			<Location
				{...location}
				onPress={() => navigation.navigate('SearchLocation')}
			/>
			<View>
				<AnimalTypesList types={types} />
			</View>
			<AnimalsList animals={animals} />
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
