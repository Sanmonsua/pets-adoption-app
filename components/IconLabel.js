import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function IconLabel({
	Component,
	backgroundColor,
	iconProps,
	label,
	value,
}) {
	return (
		<View>
			<View style={styles.row}>
				<View
					style={{
						backgroundColor,
						marginRight: 10,
						padding: 5,
						borderRadius: 10,
					}}
				>
					<Component {...iconProps} />
				</View>
				<Text style={styles.bold}>{label}</Text>
			</View>
			<Text style={styles.subtitle}>{value}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	subtitle: {
		fontSize: 20,
		color: '#57419d',
		marginBottom: 20,
	},
	bold: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#57419d',
	},
})
