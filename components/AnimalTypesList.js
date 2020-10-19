import React from 'react'
import { FlatList } from 'react-native'

import AnimalType from './AnimalType'

export default function AnimalTypesList({ types = [], selected, onSelect }) {
	function renderType({ item }) {
		return (
			<AnimalType
				{...item}
				active={item.value === selected}
				onPress={() => onSelect(item)}
			/>
		)
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
