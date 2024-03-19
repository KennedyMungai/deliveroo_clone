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
					<Text>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.profileButton}>
					<Ionicons
						name='person-circle-outline'
						size={30}
						color={Colors.primary}
						style={{ backgroundColor: 'white' }}
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
		backgroundColor: '#FFF',
		paddingHorizontal: 10
	},
	container: {
		height: 150,
		// marginTop: 50,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
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
	profileButton: {}
})
