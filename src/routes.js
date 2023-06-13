import react from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Busca from "./pages/Busca";
import Perfil from "./pages/Perfil";
import Pedidos from "./pages/Pedidos";
import Carteira from "./pages/Carteira";
import Pagamentos from "./pages/Pagamentos";

const BottomTab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <BottomTab.Navigator activeColor="red" inactiveColor="gray">
            <BottomTab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="home" color={color} size={26} />
                ),
            }} 
            />
           <BottomTab.Screen name="Busca" component={Busca} options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="search" color={color} size={26} />
                ),
            }} 
            />
            <BottomTab.Screen name="Pedidos" component={Pedidos} options={{
                tabBarLabel: 'Pedidos',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="assignment" color={color} size={26} />
                ),
            }} 
            />
            <BottomTab.Screen
          name="PerfilRoutes"
          component={PerfilRoutes}
          options={{
            headerShown: false,
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />         
        </BottomTab.Navigator>    
    </NavigationContainer>
  );
}

export function PerfilRoutes() {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator>
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Carteira" component={Carteira} />
        <Stack.Screen name="Pagamentos" component={Pagamentos} />
        </Stack.Navigator>
    );
}
