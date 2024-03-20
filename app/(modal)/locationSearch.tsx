import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

const LocationSearch = () => {
	const [location, setLocation] = useState({
		latitude: 1.0,
		longitude: 38.23,
		latitudeDelta: 0.02,
		longitudeDelta: 0.2
	})

	return (
		<View style={styles.container}>
			<MapView style={styles.map} region={location} showsUserLocation />
		</View>
	)
}

export default LocationSearch

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100
	},
	map: {
		flex: 1
	}
})
