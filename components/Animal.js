import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Animal({ name, species, picture }) {
	return (
		<TouchableOpacity style={styles.container}>
			<Image style={styles.image} source={{ uri: picture }} />
			<View style={styles.textWrapper}>
				<Text numberOfLines={1} style={styles.text}>
					{name}
				</Text>
				<Text style={styles.species}>{species}</Text>
			</View>
			<View>
				<Ionicons name="ios-arrow-forward" size={24} color="#57419d" />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginVertical: 5,
		flexDirection: 'row',
		borderRadius: 20,
		alignItems: 'center',
		backgroundColor: '#f5f5f9',
	},
	text: {
		color: '#57419d',
		fontWeight: 'bold',
		width: 150,
		fontSize: 20,
	},
	textWrapper: {
		margin: 15,
	},
	species: {
		color: 'gray',
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 25,
	},
})
