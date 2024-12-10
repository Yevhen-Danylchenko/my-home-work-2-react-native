import {Pressable, StyleSheet, Text, View} from 'react-native';

const PrimaryButton = ({children, onPress}) => {
	return (
	  <Pressable
		style={({pressed}) =>
			[styles.container, pressed && styles.pressed]
		}
		onPress={onPress}>
		  <View>
			  <Text style={styles.buttonText}>{children}</Text>
		  </View>
	  </Pressable>
	)
}

export default PrimaryButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#73184f',
		borderRadius: 28,
		paddingVertical: 8, // Reduced padding
		paddingHorizontal: 12, // Reduced padding
		elevation: 4,
	},
	buttonText: {
		fontSize: 16, // Slightly smaller text
		fontWeight: 'bold',
		color: '#ffffff',
		textAlign: 'center'
	},
	pressed: {
		opacity: 0.7
	}
});
