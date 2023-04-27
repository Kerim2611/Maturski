import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const QuizScreen = () => {
  const navigation = useNavigation();
  const data = questions;
  const totalQuestions = data.length;
  // Poeni
  const [points, setPoints] = useState(0);

  // Indeks pitanja
  const [index, setIndex] = useState(0);

  // Status odgovora (TRUE ili FALSE)
  const [answerStatus, setAnswerStatus] = useState(null);

  // Odgovori
  const [answers, setAnswers] = useState([]);

  // Odabrani odgovor
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Brojač
  const [counter, setCounter] = useState(11000);

  // Interval
  let interval = null;

  // Progres bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(answerStatus)

  return (
    <SafeAreaView style={{backgroundColor:"white",}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 50,
        }}
      >
        <Text  style={{
            color: "#00B0AB",
            fontSize: 25,
            fontWeight: "600",
            fontWeight: "bold", 
          }}>
            QUIZZY IZAZOV
            </Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "#00B0AB", borderRadius: 20, }}
        >
          <Text
            style={{ color: "black", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <Text style={{
            color: "#00B0AB",
            fontSize: 15,
            fontWeight: "600",
            fontWeight: "bold", 
          }}>Vaš rezultat
          </Text>
        <Text  style={{
            color: "#00B0AB",
            fontSize: 15,
            fontWeight: "600",
            fontWeight: "bold", 
          }}>
          ({index}/{totalQuestions}) Odgovorena pitanja
        </Text >
      </View>

      {/* Progress Bar */}
      <View
          style={{
            backgroundColor: "#00B0AB",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 10,
            borderRadius: 20,
            borderColor:"black",
            justifyContent: "center",
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "#008EC4",
              borderRadius: 12,
              borderColor:"black",
              position: "absolute",
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
          />
        </View>

      <View
        style={{
          marginTop: 30,
          backgroundColor: "white",
          padding: 20,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color:"#00B0AB", textAlign:"center" }}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 20, }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              style={
                selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginVertical: 10,
                      backgroundColor: "#00B0AB",
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginVertical: 10,
                      backgroundColor: "#CC0099",
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "black",
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
            index === currentQuestion.correctAnswerIndex ? (
              <AntDesign
              style={{
                borderColor: "black",
                textAlign: "center",
                borderWidth: 0.5,
                width: 40,
                height: 40,
                borderRadius: 20,
                padding: 10,
              }}
              name="check"
              size={20}
              color="white"
            />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "black",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    padding: 10,
                    borderRadius: 20,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "black",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {item.options}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "white",
                padding: 10,
                borderRadius: 7,
                height: 300,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 20, textAlign: "center", fontWeight: "bold",color:"#00B0AB" }
            }
          >
            {!!answerStatus ? "Tačan odgovor :)" : "Pogrešan odgovor :("}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              navigation.navigate("Results", {
                points: points,

                answers: answers,
              })
            }
            style={{
              backgroundColor: "#00B0AB",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "black"}}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "#00B0AB",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "black" }}>Sljedeće pitanje</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});