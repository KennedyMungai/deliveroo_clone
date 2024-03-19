import { categories } from '@/assets/data/home'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import React from 'react'
import { someCategories } from '@/assets/data/filter'
import {
	FlatList,
	ListRenderItem,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { Fontisto, Ionicons } from '@expo/vector-icons'

interface SomeCategory {
	name: string
	count: number
	checked?: boolean
}

const ItemBox = () => (
	<View style={styles.itemContainer}>
		<TouchableOpacity style={styles.item}>
			<Ionicons
				name='arrow-down-outline'
				size={20}
				color={Colors.medium}
			/>
			<Text style={{ flex: 1 }}>Sort</Text>
			<Ionicons name='chevron-forward' size={22} color={Colors.primary} />
		</TouchableOpacity>
	</View>
)

const FilterModal = () => {
	const navigation = useNavigation()

	const renderItem: ListRenderItem<SomeCategory> = ({ item }) => (
		<View>
			<Text>{item.name}</Text>
		</View>
	)

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={someCategories}
				keyExtractor={(item) => item.name}
				renderItem={renderItem}
				ListHeaderComponent={<ItemBox />}
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
	},
	itemContainer: {
		padding: 8,
		borderRadius: 8,
		marginBottom: 16
	},
	item: {
		flexDirection: 'row',
		gap: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 8,
		backgroundColor: 'white',
		borderColor: Colors.grey,
		borderBottomWidth: 1
	}
})
