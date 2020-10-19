import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import IconLabel from '../components/IconLabel'
import Button from '../components/Button'

import { FontAwesome } from '@expo/vector-icons'
import PhotosFlatList from '../components/PhotosFlatList'

export default function AnimalScreen({ route }) {
	var {
		name,
		breeds: { primary: breed },
		photos = [],
		gender,
		description,
	} = route.params
	return (
		<ImageBackground
			source={require('../assets/background.png')}
			style={{ flex: 1, justifyContent: 'flex-end' }}
		>
			<View style={styles.container}>
				<Text style={styles.title}>{name}</Text>
				<View
					style={{
						...styles.row,
						justifyContent: 'space-between',
						marginVertical: 10,
					}}
				>
					<IconLabel
						Component={FontAwesome}
						backgroundColor="#ffdd8350"
						iconProps={{
							name: 'paw',
							size: 24,
							color: '#ffdd83',
						}}
						label="Breed"
						value={breed}
					/>
					<IconLabel
						Component={FontAwesome}
						backgroundColor="#fba6ae50"
						iconProps={{
							name: 'transgender',
							size: 24,
							color: '#fba6ae',
						}}
						label="Gender"
						value={gender}
					/>
				</View>
				<Text style={styles.description}>{description}</Text>
				<PhotosFlatList photos={photos} />
				<View style={styles.footer}>
					<Button title="Adopt now" />
				</View>
			</View>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 0.7,
		borderRadius: 20,
		padding: 30,
		justifyContent: 'space-between',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 30,
		color: '#57419d',
		marginBottom: 20,
	},
	subtitle: {
		fontSize: 20,
		color: '#57419d',
		marginBottom: 20,
	},
	description: {
		color: 'darkgray',
		fontSize: 17,
		textAlign: 'justify',
	},
	bold: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#57419d',
	},
	footer: {
		justifyContent: 'flex-end',
	},
	mutedText: {
		color: 'gray',
	},
})
