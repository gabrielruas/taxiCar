import { Text, ImageBackground, Image, TouchableOpacity, Alert} from "react-native";
import icons from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./home.styles";

function Home(props) {
    const navigation = useNavigation();

    function OpenPassenger() {
        navigation.navigate("passenger");
    }
    
    function OpenRide() {
        navigation.navigate("ride");
    }
    return (
        <ImageBackground source={icons.bg} resizeMode="cover" style={styles.bg}>
           <TouchableOpacity style={styles.btn} onPress={OpenPassenger}>
                <Image source={icons.logo} style={styles.logo}/>
                <Image source={icons.passenger} style={styles.img}/>
                <Text style={styles.Title}>Passgeiro</Text>
                <Text style={styles.text}>Encontre uma carona para voce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={OpenRide}>
                <Image source={icons.driver} style={styles.img}/>
                <Text style={styles.Title}>Motorista</Text>
                <Text style={styles.text}>Ofere carona em seu carro</Text>
            </TouchableOpacity>
        </ImageBackground>
            
    );
}

export default Home;


