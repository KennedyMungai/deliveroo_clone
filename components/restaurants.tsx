import { restaurants } from '@/assets/data/home'
import { Link } from 'expo-router'
import React from 'react'
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native'

const Restaurants = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{restaurants.map((hotel, index) => (
				<Link href={`restaurants/${hotel.id}`} key={index} asChild>
					<TouchableOpacity style={styles.categoryCard} key={index}>
						<Image
							source={hotel.img}
							style={{ borderRadius: 4, aspectRatio: 1 }}
						/>
						<Text style={styles.categoryText}>{hotel.name}</Text>
					</TouchableOpacity>
				</Link>
			))}
		</ScrollView>
	)
}

export default Restaurants

const styles = StyleSheet.create({
	categoryCard: {
		width: 300,
		height: 250,
		marginHorizontal: 100,
		elevation: 2,
		shadowColor: '#00000050',
		shadowOffset: {
			width: 0,
			height: 4
		},
		display: 'flex',
		gap: 20
	},
	categoryText: {
		padding: 5,
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
