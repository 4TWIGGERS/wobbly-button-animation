import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const UploadComp = ({ i, t, textUploadValue }) => {
  const delayed = useDerivedValue(() => {
    return withDelay(i * 50, withTiming(textUploadValue.value));
  });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(delayed.value, [1, 0], [0, 10]),
        },
        {
          scale: interpolate(delayed.value, [1, 0], [1, 0]),
        },
      ],
    };
  });
  return (
    <Animated.Text
      style={[{ color: "white", fontWeight: "bold", fontSize: 20 }, style]}
    >
      {t}
    </Animated.Text>
  );
};

export default UploadComp;
