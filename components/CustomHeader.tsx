import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomHeader = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>CustomHeader</Text>
		</SafeAreaView>
	)
}

export default CustomHeader

const styles = StyleSheet.create({
	container: {
		height: 150,
		paddingTop: 50
	}
})
