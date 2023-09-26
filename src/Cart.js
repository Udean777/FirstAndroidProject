import React from "react";
import { ScrollView, View } from "react-native";
import CartDetail from "./components/CartDetail";
import CART from "./data/dataCart";

function Cart() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#f2f2f2", height: "100%" }}>
        {CART.map((item) => (
          <CartDetail
            key={item.title}
            title={item.title}
            ImageSrc={item.ImageSrc}
            desc={item.desc}
            link={item.link}
            price={item.price}
            duration={item.duration}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Cart;
