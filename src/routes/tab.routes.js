import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cadastrado from "../screens/cadastro";
import perfil from "../screens/perfil";

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="cadastro" component={Cadastrado}/>
            <Tab.Screen name="perfil" component={perfil}/>
        </Tab.Navigator>
    )
}