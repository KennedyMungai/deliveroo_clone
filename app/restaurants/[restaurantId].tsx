import { restaurant } from '@/assets/data/restaurant'
import ParallaxScrollView from '@/components/parallax-scroll-view'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link, useNavigation } from 'expo-router'
import React, { useLayoutEffect, useRef, useState } from 'react'
import {
	Image,
	ListRenderItem,
	ScrollView,
	SectionList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'

const RestaurantDetailsPage = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const scrollRef = useRef<ScrollView>(null)
	const itemsRef = useRef<TouchableOpacity[]>([])

	const navigation = useNavigation()

	const opacity = useSharedValue(0)
	const animatedStyles = useAnimatedStyle(() => ({
		opacity: opacity.value
	}))

	const DATA = restaurant.food.map((item, index) => ({
		title: item.category,
		data: item.meals,
		index
	}))

	const onScroll = (event: any) => {
		const y = event.nativeEvent.contentOffset.y

		if (y > 350) {
			opacity.value = withTiming(1)
		} else {
			opacity.value = withTiming(0)
		}
	}

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

	const selectCategory = (index: number) => {
		setActiveIndex(index)
	}

	const renderItem: ListRenderItem<any> = ({ item, index }) => (
		<Link href='/' asChild>
			<TouchableOpacity style={styles.renderItem}>
				<View
					style={{
						flex: 1,
						gap: 10
					}}
				>
					<View>
						<Text style={styles.dishName}>{item.name}</Text>
						<Text style={styles.dishInfo}>{item.info}</Text>
					</View>
					<Text style={styles.dishPrice}>$ {item.price}</Text>
				</View>
				<Image source={item.img} style={styles.dishImage} />
			</TouchableOpacity>
		</Link>
	)

	return (
		<>
			<ParallaxScrollView
				style={{ flex: 1, paddingHorizontal: 10 }}
				scrollEvent={onScroll}
				backgroundColor='white'
				contentBackgroundColor={Colors.lightGrey}
				parallaxHeaderHeight={300}
				stickyHeaderHeight={120}
				showsVerticalScrollIndicator={false}
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
						contentContainerStyle={{ paddingBottom: 50 }}
						showsVerticalScrollIndicator={false}
						SectionSeparatorComponent={() => (
							<View style={styles.sectionSeparator} />
						)}
						renderSectionHeader={({
							section: { title, index }
						}) => <Text style={styles.sectionHeader}>{title}</Text>}
						renderItem={renderItem}
					/>
				</View>
			</ParallaxScrollView>

			<Animated.View style={[animatedStyles, styles.stickySegments]}>
				<View style={styles.segmentsShadow}>
					<ScrollView
						ref={scrollRef}
						horizontal
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.segmentScrollView}
					>
						{restaurant.food.map((item, index) => (
							<TouchableOpacity
								key={index}
								style={
									activeIndex === index
										? styles.segmentButtonActive
										: styles.segmentButton
								}
								onPress={() => selectCategory(index)}
								ref={(ref) => (itemsRef.current[index] = ref!)}
							>
								<Text
									style={
										activeIndex === index
											? styles.segmentActiveText
											: styles.segmentText
									}
								>
									{item.category}
								</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</Animated.View>
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
	},
	sectionHeader: {
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: 40
	},
	sectionSeparator: {
		borderWidth: 1,
		borderColor: Colors.grey
	},
	renderItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 16,
		marginVertical: 8,
		alignItems: 'center'
	},
	dishImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginLeft: 10
	},
	dishName: {
		fontSize: 16,
		fontWeight: '600'
	},
	dishInfo: {
		fontSize: 14,
		color: Colors.medium,
		paddingVertical: 4
	},
	dishPrice: {
		fontSize: 14
	},
	stickySegments: {
		position: 'absolute',
		height: 50,
		left: 0,
		right: 0,
		top: 100,
		backgroundColor: 'white',
		overflow: 'hidden',
		paddingBottom: 4
	},
	segmentsShadow: {
		justifyContent: 'center',
		paddingTop: 10,
		shadowColor: 'black',
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.2,
		elevation: 5
	},
	segmentButton: {
		borderRadius: 50,
		paddingHorizontal: 16
	},
	segmentButtonActive: {
		backgroundColor: Colors.primary,
		paddingHorizontal: 16,
		borderRadius: 50
	},
	segmentText: {
		fontSize: 16,
		paddingVertical: 4,
		fontWeight: '600',
		color: Colors.primary
	},
	segmentActiveText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 16,
		paddingVertical: 4
	},
	segmentScrollView: {
		paddingHorizontal: 16,
		alignItems: 'center',
		gap: 16
	}
})
