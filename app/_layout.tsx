import CustomHeader from '@/components/CustomHeader'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const MainAppLayout = () => {
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
							headerTransparent: true
						}}
					/>
				</Stack>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	)
}

export default MainAppLayout
