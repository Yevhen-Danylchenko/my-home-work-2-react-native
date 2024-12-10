import {View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from "../components/PrimaryButton";
import {useState} from "react";

const StartGameScreen = ({onPickNumber}) => {
	console.log('Received onPickNumber:', onPickNumber);
	const [enteredNumber, setEnteredNumber] = useState('');
	
	const numberInputHandler = (enteredNumber) => {
		setEnteredNumber(enteredNumber)
	}
	
	const resetInputHandler = () => {
		console.log('clicked')
		setEnteredNumber('');
	}
	
const confirmInputHandler = () => {
    console.log('clicked'); // Debug log
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
        Alert.alert(
            "Invalid Number!",
            "Number has to be between 1 and 99.",
            [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
        );
        return;
    }
    console.log('Calling onPickNumber with:', chosenNumber);
    onPickNumber(chosenNumber); // Pass the chosen number to the parent
};
	
	return (
	  <View style={styles.inputContainer}>
		  <TextInput
			style={styles.numberInput}
			maxLength={2}
			value={enteredNumber}
			onChangeText={numberInputHandler}
			keyboardType={'numeric'}
		  />
		  <View style={styles.buttonsContainer}>
			  <View style={styles.buttonContainer}>
				  <PrimaryButton
					onPress={resetInputHandler}>Reset</PrimaryButton>
			  </View>
			  <View style={styles.buttonContainer}>
				  <PrimaryButton
					onPress={confirmInputHandler}>Confirm</PrimaryButton>
			  </View>
		  </View>
	  </View>
	)
}

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 100,
		marginHorizontal: 24,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		padding: 16,
		backgroundColor: '#2f051e',
		elevation: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.8,
	},
	numberInput: {
		height: 60,
		width: 60,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%', // Ensure that the container takes the full width of the input container
	},
	buttonContainer: {
		width: '45%', // Set specific width for each button to fit side by side
		marginHorizontal: 5, // Add margin to add some space between the buttons
	}
});
