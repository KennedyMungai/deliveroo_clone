import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ParallaxScrollView from '@/components/parallax-scroll-view'

const RestaurantDetailsPage = () => {
	return (
		<>
			<ParallaxScrollView style={styles.container}>
				<Text>RestaurantDetailsPage</Text>
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
	}
})
