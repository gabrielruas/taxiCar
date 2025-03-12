import {Text, Touchable, TouchableOpacity} from "react-native";
import {styles} from " ./mybutton.styles.js"

function MyButton() {
    return <TouchableOpacity styles={styles.btnYellow}>
        <Text> Confirmar</Text>
    </TouchableOpacity>;

}
export default MyButton;