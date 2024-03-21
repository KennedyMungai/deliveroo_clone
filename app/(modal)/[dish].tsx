import { getDishById } from '@/assets/data/restaurant'
import Colors from '@/constants/Colors'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DishDetailPage = () => {
	const { dish: dishId } = useLocalSearchParams()

	const item = getDishById(+dishId)

	const addToCart = () => {}

	return (
		<SafeAreaView style={styles.container}>
			<Image source={item?.img} style={styles.image} />
			<View style={styles.dishDetails}>
				<Text style={styles.dishTitle}>{item?.name}</Text>
				<Text style={styles.dishDescription}>{item?.info}</Text>
			</View>

			<View style={styles.footer}>
				<TouchableOpacity style={styles.fullButton} onPress={addToCart}>
					<Text style={styles.footerText}>Add for {item?.price}</Text>
				</TouchableOpacity>
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
		backgroundColor: Colors.lightGrey,
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
		fontWeight: '500',
		lineHeight: 22
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%'
	},
	fullButton: {
		backgroundColor: Colors.primary,
		padding: 16,
		margin: 16,
		borderRadius: 4,
		alignItems: 'center',
		flex: 1,
		height: 56
	},
	footerText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold'
	}
})
