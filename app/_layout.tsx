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
				</Stack>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	)
}

export default MainAppLayout
