import { Text, TextProps } from "./Themed";

function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export { MonoText };
