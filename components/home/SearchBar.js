import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        backgroundColor: "#eee",
        borderRadius: 30,
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <View style={{ marginLeft: 10, marginTop: 5 }}>
        <Ionicons name="location-sharp" size={24} />
      </View>

      <TextInput
        style={{
          backgroundColor: "transparent",
          fontWeight: "700",
          borderRadius: 50,
          alignItems: "center",
        }}
        placeholder="Search"
        onChangeText={value => [setSearchQuery(value)]}
      />
      <TouchableOpacity
        onPress={() => [
          searchQuery == "" ? "" : props.cityHandler(searchQuery),
        ]}
        style={{
          flexDirection: "row",
          marginRight: 8,
          backgroundColor: "white",
          padding: 9,
          borderRadius: 30,
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
