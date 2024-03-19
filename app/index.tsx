import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
		flex: 1
	}
})
