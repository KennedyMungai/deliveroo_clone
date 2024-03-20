import { categories } from '@/assets/data/home'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Categories = () => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{categories.map((category, index) => (
				<View style={styles.categoryCard} key={index}>
					<Image source={category.img} style={{ borderRadius: 4 }} />
					<Text style={styles.categoryText}>{category.text}</Text>
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
		marginHorizontal: 10,
		elevation: 2,
		shadowColor: '#00000050',
		shadowOffset: {
			width: 0,
			height: 2
		},
		margin: 2
	},
	categoryText: {
		padding: 5,
		fontSize: 12,
		fontWeight: 'bold'
	}
})
