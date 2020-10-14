import React from 'react'
import { FlatList } from 'react-native'

import Animal from './Animal'

export default function AnimalsList({ animals = [] }) {
	function renderAnimal({ item }) {
		return <Animal {...item} />
	}

	return (
		<FlatList
			data={animals}
			renderItem={renderAnimal}
			keyExtractor={({ id }) => `${id}`}
		/>
	)
}
