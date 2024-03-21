import { restaurant } from '@/assets/data/restaurant'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import React, { useLayoutEffect } from 'react'
import {
	Image,
	SectionList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

const RestaurantDetailsPage = () => {
	const navigation = useNavigation()

	const DATA = restaurant.food.map((item, index) => ({
		title: item.category,
		data: item.meals,
		index
	}))

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
			),
			headerRight: () => (
				<View style={styles.headerRightStyles}>
					<TouchableOpacity
						onPress={() =>
							console.log('Functionality to be implemented')
						}
						style={styles.roundButton}
					>
						<Ionicons
							name='share-outline'
							size={24}
							color={Colors.primary}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							console.log('Functionality to be implemented')
						}
						style={styles.roundButton}
					>
						<Ionicons
							name='search-outline'
							size={24}
							color={Colors.primary}
						/>
					</TouchableOpacity>
				</View>
			)
		})
	}, [])

	return (
		<>
			<ParallaxScrollView
				style={{ flex: 1, paddingHorizontal: 10 }}
				backgroundColor='white'
				contentBackgroundColor={Colors.lightGrey}
				parallaxHeaderHeight={300}
				stickyHeaderHeight={120}
				renderBackground={() => (
					<Image
						source={restaurant.img}
						style={{ width: '100%', height: 300 }}
					/>
				)}
				renderStickyHeader={() => (
					<View key='sticky-header' style={styles.stickySection}>
						<Text style={styles.stickySectionText}>
							{restaurant.name}
						</Text>
					</View>
				)}
			>
				<View style={styles.detailsContainer}>
					<Text style={styles.restaurantName}>{restaurant.name}</Text>
					<Text style={styles.restaurantDescription}>
						{restaurant.delivery} . {restaurant.tags.join(' . ')}
					</Text>
					<Text style={styles.restaurantDescription}>
						{restaurant.about}
					</Text>
					<SectionList
						sections={DATA}
						scrollEnabled={false}
						keyExtractor={(item, index) => item + index.toString()}
						renderSectionHeader={({
							section: { title, index }
						}) => <Text>{title}</Text>}
						renderItem={({ item, index }) => (
							<Text>{item.name}</Text>
						)}
					/>
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
		marginLeft: 60,
		height: 100,
		justifyContent: 'flex-end'
	},
	roundButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#FFFFFF90',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerRightStyles: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	stickySectionText: {
		fontSize: 20,
		padding: 10
	},
	restaurantName: {
		fontSize: 30,
		fontWeight: '600',
		padding: 16
	},
	restaurantDescription: {
		fontSize: 16,
		padding: 16,
		lineHeight: 22,
		fontWeight: '500',
		color: Colors.medium
	}
})
