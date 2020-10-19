import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { setType } from '../redux/actions'

import { searchAnimals, getAnimalTypes } from '../api/animals'
import Location from '../components/Location'
import AnimalTypesList from '../components/AnimalTypesList'
import AnimalsList from '../components/AnimalsList'

export default function HomeScreen({ navigation }) {
	var [animals, setAnimals] = useState([])
	var [types, setTypes] = useState([])
	var [isLoading, setIsLoading] = useState(false)

	var location = useSelector((state) => state.location)
	var type = useSelector((state) => state.type)

	var dispatch = useDispatch()

	useEffect(
		function onChangeEffect() {
			setIsLoading(true)
			getAnimals()

			async function getAnimals() {
				var { latitude, longitude } = location
				var results = await searchAnimals({
					location: `${latitude},${longitude}`,
					type,
				})
				setAnimals(results)
				setIsLoading(false)
			}
		},
		[location, type]
	)

	useEffect(function onMountEffect() {
		getTypes()
		async function getTypes() {
			var results = await getAnimalTypes()
			var initialType = {
				name: 'All',
				value: '',
			}
			setTypes([initialType, ...results])
		}
	}, [])

	function onSelectType(t) {
		dispatch(setType(t))
	}

	function onPressAnimal(animal) {
		navigation.navigate('Animal', animal)
	}

	return (
		<View style={styles.container}>
			<Location
				{...location}
				onPress={() => navigation.navigate('SearchLocation')}
			/>
			<View>
				<AnimalTypesList
					types={types}
					selected={type}
					onSelect={onSelectType}
				/>
			</View>
			{(isLoading && (
				<View style={styles.loadingWrapper}>
					<ActivityIndicator size="large" color="#57419d" />
				</View>
			)) || <AnimalsList animals={animals} onSelect={onPressAnimal} />}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 40,
		justifyContent: 'center',
		backgroundColor: 'white',
		flex: 1,
	},
	loadingWrapper: {
		flex: 1,
		padding: 40,
	},
})
