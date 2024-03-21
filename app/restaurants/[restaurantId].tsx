import { restaurant } from '@/assets/data/restaurant'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import Colors from '@/constants/Colors'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const RestaurantDetailsPage = () => {
	return (
		<>
			<ParallaxScrollView
				style={{ flex: 1 }}
				backgroundColor='white'
				contentBackgroundColor={Colors.lightGrey}
				parallaxHeaderHeight={300}
				renderBackground={() => <Image source={restaurant.img} />}
			>
				<View style={styles.detailsContainer}>
					<Text>Details</Text>
				</View>
			</ParallaxScrollView>
		</>
	)
}

export default RestaurantDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 10
	},
	detailsContainer: {
		backgroundColor: Colors.lightGrey
	}
})
