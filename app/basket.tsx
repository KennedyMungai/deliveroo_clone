import useBasketStore from '@/store/basket-store'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Colors from '@/constants/Colors'

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
						ListHeaderComponent={() => (
							<Text style={styles.section}>Items</Text>
						)}
						ItemSeparatorComponent={() => (
							<View style={styles.separator} />
						)}
						renderItem={({ item }) => (
							<View style={styles.row}>
								<Text style={{ color: Colors.primary }}>
									{item.quantity} x{' '}
								</Text>
								<Text style={{ flex: 1, fontSize: 18 }}>
									{item.name}
								</Text>
								<Text style={{ color: 'tomato', fontSize: 18 }}>
									$ {item.price * item.quantity}
								</Text>
							</View>
						)}
						ListFooterComponent={() => (
							<View>
								<View style={styles.totalRow}></View>
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
	},
	row: {
		flexDirection: 'row',
		padding: 10,
		gap: 20,
		alignItems: 'center'
	},
	section: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 10
	},
	separator: {
		height: 1,
		backgroundColor: Colors.grey
	},
	totalRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10
	}
})
