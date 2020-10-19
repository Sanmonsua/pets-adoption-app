import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({ title, onPress }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#57419d',
		borderRadius: 25,
		borderColor: 'white',
		borderWidth: 3,
		elevation: 4,
	},
	title: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
})
