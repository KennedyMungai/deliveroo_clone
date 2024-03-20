import { restaurants } from '@/assets/data/home'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Restaurants = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{restaurants.map((hotel, index) => (
				<View style={styles.categoryCard} key={index}>
					<Image source={hotel.img} style={{ borderRadius: 4 }} />
					<Text style={styles.categoryText}>{hotel.name}</Text>
				</View>
			))}
		</ScrollView>
	)
}

export default Restaurants

const styles = StyleSheet.create({
	categoryCard: {
		width: 100,
		height: 100,
		marginHorizontal: 10,
		elevation: 2,
		shadowColor: '#00000050',
		shadowOffset: {
			width: 0,
			height: 4
		}
	},
	categoryText: {
		padding: 5,
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
