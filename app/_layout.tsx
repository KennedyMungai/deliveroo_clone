import { Stack } from 'expo-router'
import React from 'react'

const MainAppLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' />
		</Stack>
	)
}

export default MainAppLayout
