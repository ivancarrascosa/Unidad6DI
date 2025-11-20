import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './components';
import { Header } from '@react-navigation/elements';
import { Carrito } from './carrito';

const productos = [
  {
    id: '1',
    name: "Smartwatch X",
    price: 185.99,
    imagen: { uri: "https://images.squarespace-cdn.com/content/v1/66b4c85b196d2a781c6d469c/1723123804144-0NHSZVOKX0WZHZ394I05/MeanArea_transparent_rostral.png" }
  },
  {
    id: '2',
    name: "iPhone 15 Pro",
    price: 999.99,
    imagen: { uri: "https://cdn.pixabay.com/photo/2016/11/29/03/35/apple-1869640_1280.jpg" }
  },
  {
    id: '3',
    name: "Samsung Galaxy",
    price: 849.99,
    imagen: { uri: "https://cdn.pixabay.com/photo/2017/02/01/12/57/smartphone-2031129_1280.jpg" }
  },
  {
    id: '4',
    name: "AirPods Pro",
    price: 249.99,
    imagen: { uri: "https://cdn.pixabay.com/photo/2020/12/23/10/18/airpods-5850185_1280.jpg" }
  },
  {
    id: '5',
    name: "iPad Air",
    price: 599.99,
    imagen: { uri: "https://cdn.pixabay.com/photo/2018/05/16/18/36/ipad-3401278_1280.jpg" }
  },
  {
    id: '6',
    name: "MacBook Pro",
    price: 1299.99,
    imagen: { uri: "https://cdn.pixabay.com/photo/2015/01/21/14/14/macbook-606761_1280.jpg" }
  }
];

export default function Index() {

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Carrito count={cartCount}></Carrito>
      </View>
      <FlatList
        data={productos}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            price={item.price}
            imagen={item.imagen}
            onAddToCart={() => handleAddToCart()}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 14,
  }
});
