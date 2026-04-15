import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastrado from "../screens/cadastro";
import Perfil from "../screens/perfil";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="cadastro" component={Cadastrado}/>
      <Stack.Screen name="perfil" component={Perfil}/>
    </Stack.Navigator>
  )
}