import React from 'react'
import { View, Image } from 'react-native'

export default function Photo({ uri }) {
	return (
		<Image
			style={{
				flex: 1,
				width: 100,
				height: 100,
				borderRadius: 15,
				marginVertical: 15,
				marginRight: 10,
			}}
			source={{ uri }}
		/>
	)
}
