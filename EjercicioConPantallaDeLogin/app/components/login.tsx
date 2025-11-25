import { 
  TextInput, 
  View, 
  StyleSheet, 
  Text, 
  KeyboardAvoidingView, 
  ScrollView,
  ImageBackground,
  Image
} from "react-native";
import Boton from "./boton";
import { useState } from "react";
import { Link, router } from "expo-router";

export default function LoginScreen() {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleLogin = () => {
        router.push('../logeado');
    };

    return (
        <ImageBackground 
            source={{ uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836" }}
            style={styles.background}
        >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    
                    {/* Logo patata */}
                    <View style={styles.logoContainer}>
                        <Image 
                            source={{ uri: "https://thumbs.dreamstime.com/b/patata-33361475.jpg" }}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Contenedor semicírculo blanco */}
                    <View style={styles.formContainer}>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Usuario"
                            placeholderTextColor="#999"
                            value={usuario}
                            onChangeText={setUsuario}
                            autoCapitalize="none"
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            placeholderTextColor="#999"
                            value={contrasena}
                            onChangeText={setContrasena}
                            secureTextEntry={true}
                        />

                        <Boton text="Iniciar Sesión" onPress={handleLogin} />

                        <Text style={styles.textoRegistro}>
                            No tienes cuenta?{" "}
                            <Link href="../registro" asChild>
                                <Text style={styles.textoLink}>Registrate</Text>
                            </Link>
                        </Text>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 80,
    },

    logo: {
        width: 180,
        height: 180,
        borderRadius: 100,
        backgroundColor: "rgba(255,255,255,0.6)",

    },

    formContainer: {
        backgroundColor: "white",
        width: "100%",
        paddingTop: 40,
        paddingBottom: 50,
        paddingHorizontal: 25,

        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,

        marginTop: "auto",
        alignItems: "center",
    },

    input: {
        width: "90%",
        maxWidth: 400,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: "#000",
        backgroundColor: "#fff"
    },

    textoLink: {
        fontWeight: "bold",
        color: "#3498db",
    },
    textoRegistro: {
        padding: 10,
        textAlign: "center",
    }
});
