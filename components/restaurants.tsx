import { restaurants } from '@/assets/data/home'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import React from 'react'
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
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
						<View style={styles.categoryBox}>
							<Text style={styles.categoryRestaurantText}>
								{restaurant.name}
							</Text>
							<Text style={{ color: Colors.green }}>
								{restaurant.rating} {restaurant.ratings}
							</Text>
							<Text style={{ color: Colors.medium }}>
								{restaurant.distance}
							</Text>
						</View>
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
		height: 200,
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
		paddingVertical: 5,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	imageContainer: {
		flex: 2,
		width: undefined,
		height: undefined,
		borderRadius: 4
	},
	categoryBox: {
		flex: 1,
		padding: 10
	},
	categoryRestaurantText: {}
})
