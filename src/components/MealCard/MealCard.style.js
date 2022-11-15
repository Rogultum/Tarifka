import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    margin: 7,
  },
  image: {
    width: "100%",
    height: 155,
    borderRadius: 12,
  },
  meal_name: {
    flex: 1,
    color: "white",
    position: "absolute",
    fontWeight: "600",
    fontSize: 22,
    alignSelf: "flex-end",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    textAlign: "right",
    width: "100%",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 1.5,
  },
});
