import useBasketStore from '@/store/basket-store'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const BasketPage = () => {
	const { addProduct, clearCart, items, products, reduceProduct, total } =
		useBasketStore()

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
