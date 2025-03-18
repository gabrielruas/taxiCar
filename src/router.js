import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/home/home";
import Passenger from "./screens/passenger/passenger";
import Ride from "./screens/ride/ride";

const Stack = createNativeStackNavigator();


function Routes() {
    return <NavigationContainer>
        
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen name="passenger" component={Passenger}
                options={{headerShown: true}}
            />
            <Stack.Screen name="ride" component={Ride}
                options={{headerShown: true}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
export default Routes;