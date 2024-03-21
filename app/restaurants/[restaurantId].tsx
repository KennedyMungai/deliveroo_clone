import ParallaxScrollView from '@/components/parallax-scroll-view'
import React from 'react'
import { StyleSheet } from 'react-native'

const RestaurantDetailsPage = () => {
	return (
		<>
			<ParallaxScrollView />
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
