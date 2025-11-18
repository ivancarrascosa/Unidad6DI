import React from "react";
import { View, StyleSheet, Text, Pressable, Image, ImageProps } from "react-native";

type PropsImagen = {
    name: String,
    price: number,
    imagen: ImageProps,
    onAddToCart: () => void;
}

export default function Card({name, price, imagen, onAddToCart}: PropsImagen) {
    return(
        <View style ={styles.View}>
            <Image source={imagen} style={styles.Imagen}></Image>
            <Text style = {styles.Texto}>{name}</Text>
            <Text style = {styles.Texto}>€{price} EUR</Text>
            <Pressable
            onPress={onAddToCart}
            style = {styles.Boton}>
                <Text>Add to Cart</Text>
            </Pressable>
        </View>
    )
    
}


const styles = StyleSheet.create({
    View: {
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Alineación a la izquierda
        borderColor: '#e0e0e0',
        borderWidth: 1,
        padding: 16,
        margin: 8,
        width: 180,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    Texto: {
        fontWeight: '600',
        fontSize: 16,
        marginVertical: 4,
        textAlign: 'left', // Texto alineado a la izquierda
        width: '100%',
    },
    Imagen: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        marginBottom: 12,
    },
    Boton: {
        borderRadius: 8,
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginTop: 8,
        width: '100%',
        alignItems: 'center',
    }
})
