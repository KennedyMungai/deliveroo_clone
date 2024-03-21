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
			<View style={styles.dishDetails}>
				<Text style={styles.dishTitle}>{item?.name}</Text>
				<Text style={styles.dishDescription}>{item?.info}</Text>
			</View>
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
	},
	dishDetails: {
		flex: 1,
		backgroundColor: '#FF885570',
		paddingHorizontal: 10,
		paddingVertical: 20
	},
	dishTitle: {
		fontWeight: '700',
		fontSize: 24,
		marginBottom: 8
	},
	dishDescription: {
		fontSize: 16,
		fontWeight: '500'
	}
})
