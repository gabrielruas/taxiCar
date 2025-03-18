import { Text, View, Touchable, TouchableOpacity } from "react-native";
import { styles } from "../passenger/passenger.style";
import MyButton from "../../components/mybutton/mybutton.jsx";
import MapView from "react-native-maps";

function Passenger(props) {
    return (<>
        <View style={styles.container}>
            <MapView style={styles.map}>

            </MapView>
            <MyButton text="TESTE"/>
        
            
        </View>
        </>)
}

export default Passenger;