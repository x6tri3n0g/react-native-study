import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;

// redux store에 올릴 내용들
// isCounting: true | false
// counterDuration: 1500s  // 제한시간
// elapsedTime: 0 // 시간이 얼마나 지났는지
