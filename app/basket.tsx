import useBasketStore from '@/store/basket-store'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const BasketPage = () => {
	const [order, setOrder] = useState(false)

	const { addProduct, clearCart, items, products, reduceProduct, total } =
		useBasketStore()

	return (
		<SafeAreaView style={styles.container}>
			{order && <Text>Cool Order</Text>}
			{!order && (
				<>
					<FlatList
						data={products}
						renderItem={({ item }) => (
							<View>
								<Text>{item.name}</Text>
							</View>
						)}
					/>
				</>
			)}
		</SafeAreaView>
	)
}

export default BasketPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingTop: 100
	}
})
