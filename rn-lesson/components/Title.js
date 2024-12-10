import {Text, StyleSheet} from "react-native";

const Title = ({children}) => {
	return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
	  title: {
		  fontSize: 24,
		  fontWeight: 'bold',
		  textAlign: 'center',
		  color: '#ddb52f',
		  borderWidth: 2,
		  borderColor: '#ddb52f',
		  borderRadius: 10,
		  padding: 10,
		  marginBottom: 20,
		  backgroundColor: '#2f051e',
		  elevation: 8,
		  shadowColor: '#000',
		  shadowOffset: {
			  width: 0,
		  }
	  }
  }
)

export default Title;