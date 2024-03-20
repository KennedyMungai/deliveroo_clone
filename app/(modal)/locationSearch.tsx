import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

const LocationSearch = () => {
	const [location, setLocation] = useState({
		latitude: 1,
		longitude: 38,
		latitudeDelta: 0.02,
		longitudeDelta: 0.2
	})

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
