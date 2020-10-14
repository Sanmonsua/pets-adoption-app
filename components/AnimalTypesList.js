import React from 'react'
import { FlatList } from 'react-native'

import AnimalType from './AnimalType'

export default function AnimalTypesList({ types = [] }) {
	function renderType({ item }) {
		return <AnimalType {...item} />
	}

	return (
		<FlatList
			horizontal
			data={types}
			keyExtractor={({ name }) => name}
			renderItem={renderType}
		/>
	)
}
