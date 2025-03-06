import { Text, ImageBackground } from "react-native";
import icons from "../../constants/icons";
import { styles } from "./home.styles";

function Home() {
    return (
        <ImageBackground source={icons.bg} resizeMode="cover" style={styles}>
        </ImageBackground>
            
    );
}

export default Home;


