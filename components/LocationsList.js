import React from 'react'
import { FlatList } from 'react-native'
import Location from './Location'

export default function LocationsList({ locations = [] }) {
	function renderLocation({ item }) {
		return <Location {...item} />
	}

	return (
		<FlatList
			data={locations}
			keyExtractor={({ latitude }) => String(latitude)}
			renderItem={renderLocation}
		/>
	)
}
