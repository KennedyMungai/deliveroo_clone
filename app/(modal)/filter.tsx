import { categories } from '@/assets/data/home'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import React from 'react'
import {
	FlatList,
	ListRenderItem,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

interface Category {
	text: string
	img: any
	checked?: boolean
}

const FilterModal = () => {
	const navigation = useNavigation()

	const renderItem: ListRenderItem<Category> = ({ item }) => (
		<View>
			<Text>{item.text}</Text>
		</View>
	)

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={categories}
				keyExtractor={(item) => item.text}
				renderItem={renderItem}
			/>
			<View style={styles.footer}>
				<TouchableOpacity
					style={styles.fullButton}
					onPress={() => navigation.goBack()}
				>
					<Text style={styles.footerText}>Done</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default FilterModal

const styles = StyleSheet.create({
	container: {
		paddingTop: 100,
		paddingHorizontal: 20,
		backgroundColor: 'white',
		flex: 1
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: 100,
		elevation: 10,
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowRadius: 10,
		shadowOffset: {
			width: 0,
			height: -10
		}
	},
	fullButton: {
		backgroundColor: Colors.primary,
		padding: 16,
		margin: 16,
		borderRadius: 4,
		alignItems: 'center'
	},
	footerText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18
	}
})
