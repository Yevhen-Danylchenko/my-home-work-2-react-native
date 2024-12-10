import {ImageBackground, StyleSheet} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(true);
    const [rounds, setRounds] = useState(0);

    const startGameHandler = (chosenNumber) => {
        console.log('Setting userNumber with:', chosenNumber);
        setUserNumber(chosenNumber);
        setGameIsOver(false);
        setRounds(0);
    }
    const gameOverHandler = (numberOfRounds) => {
        setGameIsOver(true);
        setRounds(numberOfRounds);
    }

    const startNewGameHandler = () => {
        setUserNumber(null);
        setRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={startGameHandler} />;

    if (userNumber && gameIsOver) {
        screen = (
            <GameOverScreen
            rounds = {rounds}
            userNumber = {userNumber}
            onStartNewGame = {startNewGameHandler}
            />
        );
    } else if (userNumber) {
        screen = (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
        )
    }
    // if (!userNumber) {
    //     screen = <StartGameScreen onPickNumber={startGameHandler}/>
    // } else if (gameIsOver) {
    //     screen = <GameOverScreen onStartNewGame={startGameHandler}/>
    // } else {
    //     screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    // }
    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
            <ImageBackground
                style={styles.rootScreen}
                resizeMode='cover'
                imageStyle={styles.imageStyle}
                source={require('./assets/background.png')}>
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageStyle: {
        opacity: 0.15
    }
});
