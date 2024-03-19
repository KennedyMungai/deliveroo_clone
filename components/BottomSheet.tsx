import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomSheet = () => {
	const snapPoints = useMemo(() => ['50%'], [])

	return (
		<BottomSheetModal snapPoints={snapPoints}>
			<View>
				<Text>BottomSheet</Text>
			</View>
		</BottomSheetModal>
	)
}

export default BottomSheet

const styles = StyleSheet.create({})
