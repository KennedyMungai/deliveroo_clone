import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const CustomHeader = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text>CustomHeader</Text>
			</View>
		</SafeAreaView>
	)
}

export default CustomHeader

const styles = StyleSheet.create({
	safeArea: { flex: 1, backgroundColor: 'white' },
	container: {
		height: 150,
		marginTop: 50
	}
})
