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
			{restaurants.map((restaurant, index) => (
				<Link href={`restaurants/${restaurant.id}`} key={index} asChild>
					<TouchableOpacity style={styles.categoryCard}>
						<Image
							source={restaurant.img}
							style={styles.imageContainer}
						/>
						<Text style={styles.categoryText}>
							{restaurant.name}
						</Text>
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
		marginHorizontal: 10,
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
	},
	imageContainer: {
		flex: 1,
		width: undefined,
		height: undefined,
		borderRadius: 4
	}
})
