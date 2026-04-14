import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tab.routes";

export default function routes(){
    return(
        <NavigationContainer>
            <TabRoutes/>
        </NavigationContainer>
    )
}