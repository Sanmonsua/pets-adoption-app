import React from 'react'
import { FlatList } from 'react-native'

import Photo from './Photo'

export default function PhotosFlatList({ photos = [] }) {
	function renderPhoto({ item }) {
		return <Photo uri={item.medium} />
	}

	return (
		<FlatList
			horizontal
			data={photos}
			keyExtractor={({ small }) => small}
			renderItem={renderPhoto}
		/>
	)
}
