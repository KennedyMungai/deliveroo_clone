import ParallaxScrollView from '@/components/parallax-scroll-view'
import Colors from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RestaurantDetailsPage = () => {
	return (
		<>
			<ParallaxScrollView
				style={{ flex: 1 }}
				backgroundColor='white'
				contentBackgroundColor={Colors.lightGrey}
				parallaxHeaderHeight={300}
			>
				<View style={{ height: 500 }}>
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
	}
})
