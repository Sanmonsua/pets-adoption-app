import React, { useState, useEffect } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import LocationsList from '../components/LocationsList'

import { searchCities } from '../api/cities'

export default function SearchLocationScreen() {
	var [search, setSearch] = useState('')
	var [locations, setLocations] = useState([])

	useEffect(() => {
		getLocations()

		async function getLocations() {
			let cities = await searchCities(search)
			setLocations(cities)
		}
	}, [search])

	return (
		<View style={styles.container}>
			<TextInput
				value={search}
				onChangeText={setSearch}
				placeholderTextColor="#57419d50"
				placeholder="Search your city"
				style={styles.input}
			/>
			<LocationsList locations={locations} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		flex: 1,
		backgroundColor: 'white',
	},
	input: {
		fontSize: 19,
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#f5f5f9',
		color: '#57419d',
	},
})
