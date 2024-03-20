import { someCategories } from '@/assets/data/filter'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
	FlatList,
	ListRenderItem,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'

interface SomeCategory {
	name: string
	count: number
	checked?: boolean
}

const ItemBox = () => (
	<>
		<View style={styles.itemContainer}>
			<TouchableOpacity style={styles.item}>
				<Ionicons
					name='arrow-down-outline'
					size={20}
					color={Colors.medium}
				/>
				<Text style={{ flex: 1 }}>Sort</Text>
				<Ionicons
					name='chevron-forward'
					size={22}
					color={Colors.primary}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item}>
				<Ionicons
					name='fast-food-outline'
					size={20}
					color={Colors.medium}
				/>
				<Text style={{ flex: 1 }}>Hygiene Rating</Text>
				<Ionicons
					name='chevron-forward'
					size={22}
					color={Colors.primary}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item}>
				<Ionicons
					name='pricetag-outline'
					size={20}
					color={Colors.medium}
				/>
				<Text style={{ flex: 1 }}>Offers</Text>
				<Ionicons
					name='chevron-forward'
					size={22}
					color={Colors.primary}
				/>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item}>
				<Ionicons
					name='nutrition-outline'
					size={20}
					color={Colors.medium}
				/>
				<Text style={{ flex: 1 }}>Dietary</Text>
				<Ionicons
					name='chevron-forward'
					size={22}
					color={Colors.primary}
				/>
			</TouchableOpacity>
		</View>
		<Text style={styles.header}>Categories</Text>
	</>
)

const FilterModal = () => {
	const [items, setItems] = useState<SomeCategory[]>(someCategories)
	const [selected, setSelected] = useState<SomeCategory[]>([])
	const flexWidth = useSharedValue(0)

	const navigation = useNavigation()

	useEffect(() => {
		const hasSelected = selected.length > 0
		const selectedItems = items.filter((item) => item.checked)
		const newSelected = selectedItems.length > 0

		if (hasSelected !== newSelected) {
			flexWidth.value = withTiming(newSelected ? 150 : 0)
		}

		setSelected(selectedItems)
	}, [items])

	const handleClearAll = () => {
		const updatedItems = items.map((item) => {
			item.checked = false

			return item
		})

		setItems(updatedItems)
	}

	const animatedStyles = useAnimatedStyle(() => {
		return {
			width: flexWidth.value,
			display: flexWidth.value ? 'flex' : 'none',
			borderWidth: flexWidth.value ? 1 : 0
		}
	})

	const renderItem: ListRenderItem<SomeCategory> = ({ item, index }) => (
		<>
			<View style={styles.row}>
				<Text>{item.name}</Text>
				<BouncyCheckbox
					isChecked={items[index].checked}
					disableBuiltInState
					fillColor={Colors.primary}
					onPress={() => {
						const isChecked = items[index].checked

						const updatedItems = items.map((item) => {
							if (item.name === items[index].name) {
								item.checked = !isChecked
							}

							return item
						})

						setItems(updatedItems)
					}}
				/>
			</View>
			<View
				style={{
					borderWidth: 1,
					borderColor: Colors.grey
				}}
			/>
		</>
	)

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.name}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={<ItemBox />}
				style={{ marginBottom: 100 }}
			/>
			<View style={styles.footer}>
				<View style={styles.btnContainer}>
					<Animated.View
						style={[animatedStyles, styles.outlineButton]}
					>
						<TouchableOpacity onPress={handleClearAll}>
							<Text style={styles.outlineButtonText}>
								Clear All
							</Text>
						</TouchableOpacity>
					</Animated.View>

					<TouchableOpacity
						style={styles.fullButton}
						onPress={() => navigation.goBack()}
					>
						<Text style={styles.footerText}>Done</Text>
					</TouchableOpacity>
				</View>
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
		alignItems: 'center',
		flex: 1,
		height: 56
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
	header: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 16
	},
	item: {
		flexDirection: 'row',
		gap: 20,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
		backgroundColor: 'white',
		borderColor: Colors.grey,
		borderBottomWidth: 1
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		justifyContent: 'space-between'
	},
	btnContainer: {
		flexDirection: 'row',
		gap: 12,
		justifyContent: 'center'
	},
	outlineButton: {
		padding: 16,
		margin: 16,
		borderRadius: 4,
		alignItems: 'center',
		borderColor: Colors.primary,
		borderWidth: 1,
		height: 56
	},
	outlineButtonText: {
		color: Colors.primary,
		fontWeight: 'bold',
		fontSize: 16
	}
})
