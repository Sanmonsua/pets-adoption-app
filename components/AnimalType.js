import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AnimalType({ name, active = false }) {
	var [backgroundColor, color, elevation] = active
		? ['#57419d', '#f5f5f9', 4]
		: ['#f5f5f9', '#57419d', 0]

	return (
		<View style={{ ...styles.container, backgroundColor, elevation }}>
			<Text style={{ color }}>{name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 70,
		width: 65,
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
})
