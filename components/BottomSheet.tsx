import Colors from '@/constants/Colors'
import {
	BottomSheetBackdrop,
	BottomSheetModal,
	useBottomSheetModal
} from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
			backgroundStyle={{ backgroundColor: Colors.lightGrey }}
			handleIndicatorStyle={{ display: 'none' }}
		>
			<View style={styles.contentContainer}>
				<View style={styles.toggle}>
					<TouchableOpacity style={styles.toggleActive}>
						<Text style={styles.activeDeliveryText}>Delivery</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.toggleInactive}>
						<Text style={styles.deliveryText}>Pick Up</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => dismiss()}
				>
					<Text style={styles.buttonText}>Confirm</Text>
				</TouchableOpacity>
			</View>
		</BottomSheetModal>
	)
})

export default BottomSheet

const styles = StyleSheet.create({
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
	},
	contentContainer: {
		flex: 1
	},
	toggle: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 20,
		marginBottom: 32
	},
	toggleActive: {
		backgroundColor: Colors.primary,
		borderRadius: 10
	},
	toggleInactive: {},
	deliveryText: {
		fontWeight: '700',
		padding: 10
	},
	activeDeliveryText: {
		fontWeight: '700',
		padding: 10,
		color: 'white'
	}
})
