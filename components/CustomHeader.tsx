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
			</View>
		</SafeAreaView>
	)
}

export default CustomHeader

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: 'white'
	},
	container: {
		height: 150,
		marginTop: 50,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	bike: {
		width: 30,
		height: 30
	}
})
