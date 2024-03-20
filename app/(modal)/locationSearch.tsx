import Colors from '@/constants/Colors'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
			<View style={styles.mapActionsBox}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Confirm</Text>
				</TouchableOpacity>
			</View>
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
	},
	mapActionsBox: {
		position: 'absolute',
		bottom: 15,
		left: 100,
		right: 100
	},
	button: {
		padding: 8,
		borderWidth: 1,
		borderColor: Colors.primary,
		justifyContent: 'center',
		borderRadius: 8
	},
	buttonText: {
		fontWeight: '400',
		fontSize: 20,
		color: Colors.primary,
		textAlign: 'center'
	}
})
