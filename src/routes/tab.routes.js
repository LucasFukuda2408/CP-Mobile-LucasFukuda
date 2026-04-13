import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import Cadastrado from "../screens/cadastro";
import perfil from "../screens/perfil";

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="cadastro" component={Cadastrado}
            options={{tabBarIcon:({color,size})=><Feather name="cadastro" color={color} size={size}/>}}
            />
            <Tab.Screen name="perfil" component={perfil}
            options={{tabBarIcon:({color,size})=><Feather name="perfil" color={color} size={size}/>}}
            />
        </Tab.Navigator>
    )
}