import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './components';

const productos = [
  {
    id: '1',
    name: "Smartwatch X",
    price: 185.99,
    imagen: require("../assets/images/splash-icon.png"),
  },
  {
    id: '2',
    name: "iPhone 15 Pro",
    price: 999.99,
    imagen: require("../assets/images/splash-icon.png"),
  },
  {
    id: '3',
    name: "Samsung Galaxy",
    price: 849.99,
    imagen: require("../assets/images/splash-icon.png"),
  },
  {
    id: '4',
    name: "AirPods Pro",
    price: 249.99,
    imagen: require("../assets/images/splash-icon.png"),
  },
  {
    id: '5',
    name: "iPad Air",
    price: 599.99,
    imagen: require("../assets/images/splash-icon.png"),
  },
  {
    id: '6',
    name: "MacBook Pro",
    price: 1299.99,
    imagen: require("../assets/images/splash-icon.png"),
  },
];

export default function Index() {
  const handleAddToCart = (productName: string) => {
    console.log(`Añadido al carrito: ${productName}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            price={item.price}
            imagen={item.imagen}
            onAddToCart={() => handleAddToCart(item.name)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    alignItems: "center"
  },
});
