import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DishDetailPage = () => {
	const { dish: dishId } = useLocalSearchParams()

	return (
		<View>
			<Text>{dishId}</Text>
		</View>
	)
}

export default DishDetailPage

const styles = StyleSheet.create({})
