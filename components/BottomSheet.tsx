import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BottomSheet = forwardRef<BottomSheetModal>((props, ref) => {
	const snapPoints = useMemo(() => ['50%'], [])

	const renderBackdrop = useCallback(
		(props: any) => (
			<BottomSheetBackdrop
				appearsOnIndex={0}
				disappearsOnIndex={-1}
				{...props}
			/>
		),
		[]
	)

	return (
		<BottomSheetModal
			snapPoints={snapPoints}
			ref={ref}
			overDragResistanceFactor={0}
			backdropComponent={renderBackdrop}
		>
			<View>
				<Text>BottomSheet</Text>
			</View>
		</BottomSheetModal>
	)
})

export default BottomSheet

const styles = StyleSheet.create({})
