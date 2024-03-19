import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

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
		height: 150,
		// marginTop: 50,
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
	}
})