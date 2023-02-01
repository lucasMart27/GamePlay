import React from "react";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

//import { styles } from "./styles";
import { categories } from "../../utils/categories";

type Props = RectButtonProperties & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  return;
  <View></View>;
}
