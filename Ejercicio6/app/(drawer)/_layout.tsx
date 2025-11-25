import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
export default function DrawerLayout() {
  return <Drawer
  initialRouteName="tabs">
    <Drawer.Screen name="tabs"
                options={{
                    title: "Home",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}/>
    <Drawer.Screen name="settings"
                options={{
                    title: "Settings",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}/>
  </Drawer>;
}
