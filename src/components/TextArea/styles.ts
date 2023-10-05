import { theme } from "./../../global/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 95,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    borderRadius: 8,
    fontfamily: theme.fonts.text400,
    fontsize: 13,
    marginRight: 4,
    textAlign: "center",
  },
});
