import CustomHeader from '@/components/CustomHeader'
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
							headerTitle: 'Label',
							headerShadowVisible: false,
							headerTransparent: true,
							headerLeft: () => (
								<TouchableOpacity
									onPress={() => navigation.goBack()}
								>
									<Ionicons
										name='close-outline'
										size={24}
										style={{ marginRight: 20 }}
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
