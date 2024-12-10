import {View,Text, StyleSheet} from "react-native";

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: "#ddb52f",
        padding: 24,
        borderRadius: 8,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 36,
        color: '#ddb52f',
        fontWeight: 'bold',
    }
})