import Colors from '@/constants/Colors'
import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const FilterModal = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Filter</Text>
			<View style={styles.footer}>
				<TouchableOpacity style={styles.fullButton}>
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
		height: 100
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
