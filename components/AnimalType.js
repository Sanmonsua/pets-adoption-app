import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function AnimalType({ name, active = false, onPress }) {
	var [backgroundColor, color, elevation] = active
		? ['#57419d', '#f5f5f9', 4]
		: ['#f5f5f9', '#57419d', 0]

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{ ...styles.container, backgroundColor, elevation }}
		>
			<Text numberOfLines={1} style={{ color, margin: 10 }}>
				{name}
			</Text>
		</TouchableOpacity>
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
