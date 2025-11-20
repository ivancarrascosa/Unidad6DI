import { Pressable, Text, StyleSheet } from "react-native"


type PropsBoton = {
    text: string;
    onPress?: () => void;
}

export default function Boton({ text, onPress }: PropsBoton) {
    return (
        <Pressable style={styles.Boton} onPress={onPress}>
            <Text style={styles.Texto}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create ({
    Boton: {
        borderRadius: 20,
        width: "80%",
        alignSelf: "center",
        display: "flex",
        alignContent: "center",
        backgroundColor: "#663F74",
    },
    Texto: {
        fontSize: 20,
        alignSelf: "center",
        color: "#FFFFFF",
        padding: 10
    }
});