import {Text, View, StyleSheet, Alert} from "react-native";
import Title from "../components/Title";
import {useState, useRef, useEffect} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomNumber = (max, min, exclude) => {
    const rnmNum = Math.floor(Math.random() * (max - min)) + min;
    if (rnmNum === exclude) {
        return generateRandomNumber(max, min, exclude);
    }
    return rnmNum;
}


const GameScreen = ({userNumber, onGameOver}) => {
    const minBoundary = useRef(1);
    const maxBoundary = useRef(100);
    const initialNumber = generateRandomNumber(100, 1, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialNumber);
    const [rounds, setRounds] = useState(0);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary.current = 1;
        maxBoundary.current = 100;
    }, []);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("You guessed wrong", 'Please try again', [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if (direction === "lower") {
            maxBoundary.current = currentGuess;
        } else {
            minBoundary.current = currentGuess + 1;
        }
        const newRandomNumber = generateRandomNumber(
            minBoundary.current,
            maxBoundary.current,
            currentGuess
        )
        setCurrentGuess(newRandomNumber);
        setRounds((curRounds) => curRounds + 1);
    }
// 35
// 54
    //10
    //10-54 = 15
    //15-54

    return (
        <View style={styles.container}>
            <Title>
                {"Guess the number!"}
            </Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Text>Lower or higher?</Text>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
            </View>
            <View><Text>Log game</Text></View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
});