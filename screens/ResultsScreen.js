import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
  } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";

  const ResultsScreen = () => {
    const route = useRoute();
    
    // console.log(route.params);
    return (
      <SafeAreaView style={{margin:15,paddingTop:300,}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color:"#00B0AB",
              fontSize:15}}>Tvoj Rezultat: </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 14,
              
             }}
          >
        </View>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color:"#00B0AB",
              fontSize:15}}>Odgovorena pitanja</Text>
          <Text style={{ color:"#00B0AB",
              fontSize:15}}>(5/5)</Text>
        </View>
  
        <Pressable
          style={{
            backgroundColor: "white",
            height: 220,
            borderRadius: 7,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Rezultat
          </Text>
          <FlatList
            numColumns={2}
            data={route.params.answers}
            renderItem={({ item, i }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                <Text>{item.question}</Text>
                {item.answer === true ? (
                  <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="#00B0AB" />
                ) : (
                  <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="#CC0099" />
                )}
              </View>
            )}
          />
          
          <Pressable style={{backgroundColor:"#00B0AB",padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}
          onPress={() => route.navigate("Home")}>
            <Text style={{color:"white",textAlign:"center"}}>Nastavi</Text>
          </Pressable>
        </Pressable>
      </SafeAreaView>
    );
  };
  
  export default ResultsScreen;
  
  const styles = StyleSheet.create({});