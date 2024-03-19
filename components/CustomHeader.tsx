import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'

const SearchBar = () => (
	<View style={styles.searchContainer}>
		<View style={styles.searchSection}>
			<View style={styles.searchField}>
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
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => {}}>
					<Image
						source={require('@/assets/images/bike.png')}
						style={styles.bike}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.titleContainer}>
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
		borderRadius: 5
	},
	optionButton: {
		padding: 10,
		borderRadius: 50
	},
	input: {
		padding: 10,
		color: Colors.mediumDark
	}
})
