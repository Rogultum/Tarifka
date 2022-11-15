import { View, Text } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Error = () => {
  return (
    <AnimatedLottieView source={require("../../assets/error.json")} autoPlay />
  );
};

export default Error;
