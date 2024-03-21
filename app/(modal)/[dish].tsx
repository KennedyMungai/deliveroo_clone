import { getDishById } from '@/assets/data/restaurant'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const DishDetailPage = () => {
	const { dish: dishId } = useLocalSearchParams()

	const item = getDishById(+dishId)

	return (
		<SafeAreaView style={styles.container}>
			<Image source={item?.img} style={styles.image} />
		</SafeAreaView>
	)
}

export default DishDetailPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	image: {
		width: '100%',
		height: 450
	}
})
