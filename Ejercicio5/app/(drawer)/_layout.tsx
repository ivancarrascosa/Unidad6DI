import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
export default function DrawerLayout() {
  return <Drawer>
    <Drawer.Screen name="index"
                options={{
                    title: "Home",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}/>
    <Drawer.Screen name="profile"
                options={{
                    title: "Profile",
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={size} color={color} />
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
