import CustomHeader from '@/components/CustomHeader'
import { Stack } from 'expo-router'
import React from 'react'

const MainAppLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{ header: () => <CustomHeader /> }}
			/>
		</Stack>
	)
}

export default MainAppLayout
