import { View } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const DoneComp = ({ i, t, textDoneValue }) => {
  const delayed = useDerivedValue(() => {
    return withDelay(i * 50, withTiming(textDoneValue.value));
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(delayed.value, [1, 0], [0, 10]),
        },
        {
          scale: interpolate(delayed.value, [0, 1], [0, 1]),
        },
      ],
    };
  });
  return (
    <View style={{ flexDirection: "row", left: 4 }}>
      <View />
      <Animated.Text
        style={[
          { color: "white", fontWeight: "bold", fontSize: 20, top: 6 },
          style,
        ]}
      >
        {t}
      </Animated.Text>
    </View>
  );
};

export default DoneComp;
