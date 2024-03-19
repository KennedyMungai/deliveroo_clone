import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import {
	BottomSheetBackdrop,
	BottomSheetModal,
	useBottomSheetModal
} from '@gorhom/bottom-sheet'
import { Link } from 'expo-router'
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

				<Text style={styles.subHeader}>Your Location</Text>
				{/* TODO: Add the proper link locations */}
				<Link href={'/'} asChild>
					<TouchableOpacity>
						<View style={styles.item}>
							<Ionicons
								name='locate-outline'
								size={20}
								color={Colors.medium}
							/>
							<Text style={{ flex: 1 }}>Current Location</Text>
							<Ionicons
								name='chevron-forward'
								size={20}
								color={Colors.primary}
							/>
						</View>
					</TouchableOpacity>
				</Link>

				<Text style={styles.subHeader}>Arrival Time</Text>
				{/* TODO: Add the proper link locations */}
				<Link href={'/'} asChild>
					<TouchableOpacity>
						<View style={styles.item}>
							<Ionicons
								name='time-outline'
								size={20}
								color={Colors.medium}
							/>
							<Text style={{ flex: 1 }}>Now</Text>
							<Ionicons
								name='chevron-forward'
								size={20}
								color={Colors.primary}
							/>
						</View>
					</TouchableOpacity>
				</Link>

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
		borderRadius: 32,
		paddingHorizontal: 30
	},
	toggleInactive: {},
	deliveryText: {
		fontWeight: '700',
		padding: 10,
		color: Colors.primary
	},
	activeDeliveryText: {
		fontWeight: '700',
		padding: 10,
		color: 'white'
	},
	subHeader: {
		fontSize: 16,
		fontWeight: '600',
		margin: 16
	},
	item: {
		flexDirection: 'row',
		gap: 16,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
		backgroundColor: 'white',
		borderColor: Colors.grey,
		borderWidth: 1
	}
})
