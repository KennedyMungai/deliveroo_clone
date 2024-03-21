import { getDishById } from '@/assets/data/restaurant'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const DishDetailPage = () => {
	const { dish: dishId } = useLocalSearchParams()

	const item = getDishById(+dishId)

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>{dishId}</Text>
			</View>
		</SafeAreaView>
	)
}

export default DishDetailPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingTop: 100
	}
})
