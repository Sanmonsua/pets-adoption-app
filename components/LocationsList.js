import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setLocation } from '../redux/actions'

import { FlatList } from 'react-native'
import Location from './Location'

export default function LocationsList({ locations = [] }) {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	function renderLocation({ item }) {
		return <Location {...item} onPress={dispatchSetLocation} />

		function dispatchSetLocation() {
			dispatch(setLocation(item))
			navigation.pop()
		}
	}

	return (
		<FlatList
			data={locations}
			keyExtractor={({ latitude }) => String(latitude)}
			renderItem={renderLocation}
		/>
	)
}
