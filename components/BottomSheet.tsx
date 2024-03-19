import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
	const snapPoints = useMemo(() => ['50%'], [])

	return (
		<BottomSheetModal
			snapPoints={snapPoints}
			ref={ref}
			overDragResistanceFactor={0}
		>
			<View>
				<Text>BottomSheet</Text>
			</View>
		</BottomSheetModal>
	)
})

export default BottomSheet

const styles = StyleSheet.create({})
