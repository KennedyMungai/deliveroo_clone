import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const BasketPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>BasketPage</Text>
			</View>
		</SafeAreaView>
	)
}

export default BasketPage

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingTop: 100
	}
})
