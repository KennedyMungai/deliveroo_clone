import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const MainAppPage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>MainAppPage</Text>
		</SafeAreaView>
	)
}

export default MainAppPage

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingTop: 180,
		paddingHorizontal: 20
	}
})
