import CustomHeader from '@/components/CustomHeader'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack, useNavigation } from 'expo-router'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const MainAppLayout = () => {
	const navigation = useNavigation()

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetModalProvider>
				<Stack>
					<Stack.Screen
						name='index'
						options={{ header: () => <CustomHeader /> }}
					/>
					<Stack.Screen
						name='(modal)/filter'
						options={{
							presentation: 'modal',
							animation: 'slide_from_bottom',
							headerTitle: 'Filter',
							headerShadowVisible: false,
							headerTransparent: true,
							headerLeft: () => (
								<TouchableOpacity
									onPress={() => navigation.goBack()}
								>
									<Ionicons
										name='close-outline'
										size={24}
										style={{
											marginRight: 20,
											color: Colors.primary
										}}
									/>
								</TouchableOpacity>
							)
						}}
					/>
					<Stack.Screen
						name='(modal)/locationSearch'
						options={{
							presentation: 'fullScreenModal',
							animation: 'slide_from_bottom',
							animationDuration: 300,
							headerTransparent: true,
							headerTitle: 'Select Location',
							headerLeft: () => (
								<TouchableOpacity
									onPress={() => navigation.goBack()}
									style={{
										backgroundColor: '#FFFFFF80',
										height: 40,
										width: 40,
										borderRadius: 20,
										alignItems: 'center',
										justifyContent: 'center',
										marginRight: 20
									}}
								>
									<Ionicons
										name='close-outline'
										size={24}
										style={{
											marginRight: 20,
											color: Colors.primary
										}}
									/>
								</TouchableOpacity>
							)
						}}
					/>
					<Stack.Screen
						name='restaurants/[restaurantId]'
						options={{
							animation: 'slide_from_right',
							animationDuration: 300,
							headerShadowVisible: false,
							headerTitle: 'Restaurant Details'
						}}
					/>
					<Stack.Screen
						name='(modal)/[dish]'
						options={{
							presentation: 'containedModal',
							animation: 'slide_from_bottom',
							animationDuration: 300,
							headerTitle: '',
							headerTransparent: true,
							headerLeft: () => (
								<TouchableOpacity
									onPress={() => navigation.goBack()}
									style={{
										backgroundColor: '#FFFFFF80',
										height: 40,
										width: 40,
										borderRadius: 20,
										alignItems: 'center',
										justifyContent: 'center',
										marginRight: 20
									}}
								>
									<Ionicons
										name='close-outline'
										size={24}
										color={Colors.primary}
									/>
								</TouchableOpacity>
							)
						}}
					/>
					<Stack.Screen
						name='basket'
						options={{
							headerTitle: 'Basket',
							headerTransparent: true,
							headerLeft: () => (
								<TouchableOpacity
									onPress={() => navigation.goBack()}
								>
									<Ionicons
										name='arrow-back'
										size={24}
										color={Colors.primary}
									/>
								</TouchableOpacity>
							)
						}}
					/>
				</Stack>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	)
}

export default MainAppLayout
