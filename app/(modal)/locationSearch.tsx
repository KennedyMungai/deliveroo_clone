import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MapView from 'react-native-maps'

const LocationSearch = () => {
	const navigation = useNavigation()

	const [location, setLocation] = useState({
		latitude: 1.0,
		longitude: 38.23,
		latitudeDelta: 0.02,
		longitudeDelta: 0.2
	})

	return (
		<View style={styles.container}>
			<View style={styles.googleSearchContainer}>
				<GooglePlacesAutocomplete
					placeholder='Search Or Move the Map'
					fetchDetails={true}
					onPress={(data, details = null) => {
						const point = details?.geometry.location

						if (!point) return

						setLocation({
							...location,
							latitude: point.lat,
							longitude: point.lng
						})
					}}
					query={{
						key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
						language: 'en'
					}}
					styles={{
						textInput: Colors.grey
					}}
				/>
			</View>

			<MapView style={styles.map} region={location} showsUserLocation />
			<View style={styles.mapActionsBox}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.goBack()}
				>
					<Text style={styles.buttonText}>Confirm</Text>
				</TouchableOpacity>
			</View>
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
	},
	googleSearchContainer: {
		padding: 16,
		width: '100%',
		position: 'absolute',
		top: 100,
		zIndex: 10
	}
})
