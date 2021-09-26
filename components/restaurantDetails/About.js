import React from "react";
import { View, Text, Image } from "react-native";

const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXyNbUJrCOSck1WUL6yB5UOGSD-vkPOLRiBGPflO4Sy9haIztqocPNX5h7Yn9t8UJje0&usqp=CAU";
const title = "Farmhouse Kitchen Thai cuisine";
const description = "Thai ~ comfort  Food ~ $$ ~ 💸 ~ 4 ⭐ (2913+) ";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = props => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = props => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = props => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {" "}
    {props.description}{" "}
  </Text>
);
