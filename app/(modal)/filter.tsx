import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const FilterModal = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>FilterModal</Text>
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
	}
})
