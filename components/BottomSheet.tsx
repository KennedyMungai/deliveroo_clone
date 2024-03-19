import Colors from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'
import {
	BottomSheetBackdrop,
	BottomSheetModal,
	useBottomSheetModal
} from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo } from 'react'
import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

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

	const { dismiss } = useBottomSheetModal()

	return (
		<BottomSheetModal
			snapPoints={snapPoints}
			ref={ref}
			overDragResistanceFactor={0}
			backdropComponent={renderBackdrop}
		>
			<View>
				<Text>BottomSheet</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dismiss()}
				>
					<Text style={styles.buttonText}>Confirm</Text>
				</TouchableOpacity>
				<Pressable style={styles.closeSheet}>
					<Feather
						name={'x'}
						size={24}
						color={'black'}
						onPress={() => dismiss()}
					/>
				</Pressable>
			</View>
		</BottomSheetModal>
	)
})

export default BottomSheet

const styles = StyleSheet.create({
	closeSheet: {
		position: 'absolute',
		top: 5,
		right: 10
	},
	button: {
		backgroundColor: Colors.primary,
		padding: 16,
		margin: 16,
		borderRadius: 4,
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold'
	}
})
