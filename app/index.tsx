import Categories from '@/components/categories'
import Restaurants from '@/components/restaurants'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

const MainAppPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Categories />
				<Text style={styles.header}>
					Top picks in your neighborhood
				</Text>
				<Restaurants />
			</ScrollView>
		</SafeAreaView>
	)
}

export default MainAppPage

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingTop: 180,
		paddingHorizontal: 20
	},
	header: {}
})
