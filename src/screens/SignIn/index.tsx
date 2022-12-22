import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export function SignIn() {
  const [text, setText] = useState("");
  return (
    <View style={styles.conntainer}>
      <Image source={IllustrationImg} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente{"\n"}
        </Text>
        <Text>
          Crie grupos para jogar seus games {"\n"}
          favooritos com seus aigoos
        </Text>
      </View>
    </View>
  );
}
