import { categories } from '@/assets/data/home'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Categories = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{categories.map((category, index) => (
				<View style={styles.categoryCard} key={index}>
					<Image source={category.img} />
					<Text>{category.text}</Text>
				</View>
			))}
		</ScrollView>
	)
}

export default Categories

const styles = StyleSheet.create({
	categoryCard: {
		width: 100,
		height: 100,
		marginHorizontal: 10
	}
})
