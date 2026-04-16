import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../screens/cadastro";
import Perfil from "../screens/perfil";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Perfil" component={Perfil}/>
    </Stack.Navigator>
  )
}