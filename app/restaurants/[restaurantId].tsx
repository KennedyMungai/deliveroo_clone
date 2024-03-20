import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RestaurantDetailsPage = () => {
	return (
		<View style={styles.container}>
			<Text>RestaurantDetailsPage</Text>
		</View>
	)
}

export default RestaurantDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 100,
		paddingHorizontal: 10
	}
})
