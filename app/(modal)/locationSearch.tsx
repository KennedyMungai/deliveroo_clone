import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

const LocationSearch = () => {
	return (
		<View style={styles.container}>
			<MapView style={styles.map} />
		</View>
	)
}

export default LocationSearch

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		flex: 1
	}
})
