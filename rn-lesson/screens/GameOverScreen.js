import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


/*
 * Виводити кількість раундів,
 * яка знадобилась користувачу щоб відгадати число
 *
 * Виводити число, яке потрібно відгадати
 *
 *
 * Додати функцію, яка буде перезапускати цю гру
 * */


const GameOverScreen = ({ rounds, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
