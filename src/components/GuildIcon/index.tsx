import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://img.freepik.com/premium-vector/modern-badge-discord-icon_578229-169.jpg?w=360";

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
