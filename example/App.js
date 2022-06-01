import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipeable-cards";

function Card({ data }) {
  return (
    <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
      <Text>{data.text}</Text>
    </View>
  );
}

function StatusCard({ text }) {
  return (
    <View>
      <Text style={styles.cardsText}>{text}</Text>
    </View>
  );
}

export default function App() {
  const [cards, setCards] = useState();

  // replace with real remote data fetching
  useEffect(() => {
    setTimeout(() => {
      setCards([
        { text: "1st card", backgroundColor: "red" },
        { text: "2nd card", backgroundColor: "purple" },
        { text: "3rd card", backgroundColor: "green" },
        { text: "4th card", backgroundColor: "blue" },
        { text: "5th card", backgroundColor: "cyan" },
        { text: "Last card", backgroundColor: "orange" },
      ]);
    }, 500);
  }, []);

  function handleLeft() {
    console.log(`Next`);
    return true;
  }

  function handleRight() {
    console.log(`Previous`);
    return true; // return false if you wish to cancel the action
  }

  function handleUp() {
    console.log(`Up`);
    return true;
  }

  return (
    <View style={styles.container}>
      {cards ? (
        <SwipeCards
          style={{
            alignItems: "stretch",
            flexGrow: 1,
          }}
          cards={cards}
          renderCard={(cardData) => <Card data={cardData} />}
          keyExtractor={(cardData) => String(cardData.text)}
          renderNoMoreCards={() => <StatusCard text="No more cards..." />}
          actions={{
            left: { /*show: false,*/ onAction: handleLeft },
            right: { /*show: false,*/ onAction: handleRight },
            up: { /*show: false,*/ onAction: handleUp },
          }}
          hasUpAction={true}
          stackOffsetY={10}
          stackOffsetX={10}
          // If you want a stack of cards instead of one-per-one view, activate stack mode
          //stack={true}
          stackDepth={3}
        />
      ) : (
        <StatusCard text="Loading..." />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: "70%",
  },
  cardsText: {
    fontSize: 22,
  },
});
