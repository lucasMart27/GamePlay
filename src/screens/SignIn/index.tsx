import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.conntainer}>
      <StatusBar 
      barStyle={"light-content"} 
      backgroundColor="transparent"
      translucent
      />

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente{"\n"}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favooritos com seus aigoos
        </Text>
      </View>
    </View>
  );
}
