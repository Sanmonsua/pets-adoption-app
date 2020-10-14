import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Location({ city, country }) {
	return (
		<View>
			<Text style={styles.label}>Location</Text>
			<TouchableOpacity style={styles.row}>
				<Entypo name="location-pin" size={26} color="#ff8f99" />
				<View style={styles.titleWrapper}>
					<Text style={styles.city}>{city}, </Text>
					<Text style={styles.country}>{country}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleWrapper: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	city: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#3f2f77',
	},
	country: {
		fontSize: 20,
		color: '#504183',
	},
	label: {
		color: '#e7e4ee',
	},
})