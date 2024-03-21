import { restaurant } from '@/assets/data/restaurant'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RestaurantDetailsPage = () => {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTransparent: true,
			headerTitle: '',
			headerTintColor: Colors.primary,
			headerLeft: () => (
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.roundButton}
				>
					<Ionicons
						name='arrow-back'
						size={24}
						color={Colors.primary}
					/>
				</TouchableOpacity>
			)
		})
	}, [])

	return (
		<>
			<ParallaxScrollView
				style={{ flex: 1 }}
				backgroundColor='white'
				contentBackgroundColor={Colors.lightGrey}
				parallaxHeaderHeight={300}
				stickyHeaderHeight={50}
				renderBackground={() => <Image source={restaurant.img} />}
				renderStickyHeader={() => (
					<View
						key='sticky-header'
						style={styles.stickySection}
					></View>
				)}
			>
				<View style={styles.detailsContainer}>
					<Text>Details</Text>
				</View>
			</ParallaxScrollView>
		</>
	)
}

export default RestaurantDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: 10
	},
	detailsContainer: {
		backgroundColor: Colors.lightGrey
	},
	stickySection: {
		backgroundColor: 'red'
	},
	roundButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#FFFFFF90',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
