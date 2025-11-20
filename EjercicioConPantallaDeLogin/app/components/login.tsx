import { Alert, TextInput, View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
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
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <ScrollView contentContainerStyle={styles.container}>
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
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
        input: {
    width: "90%",
    maxWidth: 400,
    height: 50,           // suficiente para placeholder
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15, // solo horizontal
    marginBottom: 15,
    fontSize: 16,
    color: "#000"
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
