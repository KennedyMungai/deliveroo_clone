import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useRef } from 'react'
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import BottomSheet from './BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

const SearchBar = () => (
	<View style={styles.searchContainer}>
		<View style={styles.searchSection}>
			<View style={styles.searchField}>
				<Ionicons name='search' size={20} color={Colors.medium} />
				<TextInput
					placeholder='Restaurants, Groceries, Dishes'
					style={styles.input}
				/>
			</View>
			{/* TODO: Add a proper href for the component  */}
			<Link href='/' asChild>
				<TouchableOpacity style={styles.optionButton}>
					<Ionicons
						name='options-outline'
						size={20}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			</Link>
		</View>
	</View>
)

const CustomHeader = () => {
	const bottomSheetRef = useRef<BottomSheetModal>(null)

	const openModal = () => {
		bottomSheetRef.current?.present()
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<BottomSheet ref={bottomSheetRef} />
			<View style={styles.container}>
				<TouchableOpacity onPress={openModal}>
					<Image
						source={require('@/assets/images/bike.png')}
						style={styles.bike}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.titleContainer}
					onPress={openModal}
				>
					<Text style={styles.title}>Delivery . Now</Text>
					<View style={styles.subtitleContainer}>
						<Text style={styles.subtitle}>Nairobi, KE</Text>
						<Ionicons
							name='chevron-down'
							size={20}
							color={Colors.primary}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.profileButton}>
					<Ionicons
						name='person-circle-outline'
						size={30}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			</View>
			<SearchBar />
		</SafeAreaView>
	)
}

export default CustomHeader

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	container: {
		height: 50,
		marginTop: 50,
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		gap: 20
	},
	bike: {
		width: 30,
		height: 30
	},
	titleContainer: {
		flex: 1
	},
	profileButton: {
		borderRadius: 50,
		backgroundColor: Colors.lightGrey,
		padding: 5
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		color: Colors.medium
	},
	subtitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	subtitleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 5
	},
	searchContainer: {
		height: 60,
		backgroundColor: 'white',
		marginTop: 10
	},
	searchSection: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingHorizontal: 20
	},
	searchField: {
		flex: 1,
		backgroundColor: Colors.lightGrey,
		padding: 5,
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	optionButton: {
		padding: 10,
		borderRadius: 50
	},
	input: {
		padding: 10,
		color: Colors.mediumDark
	},
	searchIcon: {}
})
