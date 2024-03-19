import CustomHeader from '@/components/CustomHeader'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import React from 'react'

const MainAppLayout = () => {
	return (
		<BottomSheetModalProvider>
			<Stack>
				<Stack.Screen
					name='index'
					options={{ header: () => <CustomHeader /> }}
				/>
			</Stack>
		</BottomSheetModalProvider>
	)
}

export default MainAppLayout
