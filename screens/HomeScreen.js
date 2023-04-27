import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 40 }}>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain", backgroundColor:"black" }}
        source={{
          uri: "asset:/logo wordmark.png",
        }}
      />

      <View style={{ padding: 30 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#00B0AB",
            fontSize: 25,
            fontWeight: "600",
            fontWeight: "bold", 
          }}
        >
          PRAVILA KVIZA
        </Text>

        <View
          style={{
            padding: 10,
            borderRadius: 6,
            marginTop: 15,
            
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "black" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 19,
                fontWeight: "500",
              }}
            >
              Za svaki tačan odgovor dobijate 5 poena
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "black" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 19,
                fontWeight: "500",
              }}
            >
              Nema negativnih oznaka za pogrešan odgovor
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "black" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 19,
                fontWeight: "500",
              }}
            >
             Imate 15s da odgovorite na svako pitanje
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "black" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "black",
                fontSize: 19,
                fontWeight: "500",
              }}
            >
              Obavezno je odgovoriti na sva pitanja.
            </Text>
          </View>
        </View>
      </View>

      <Pressable
      onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "#00B0AB",
          padding: 14,
          width: 160,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 80,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center",fontSize:18}}>Započni kviz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});