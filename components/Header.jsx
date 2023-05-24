import { Image, Text } from "react-native";
import { styles } from "./Header.style";
import headerLogo from "../assets/logo.png";
export function Header() {
  return (
    <>
      <Image style={styles.img} source={headerLogo} resizeMode="contain" />
      <Text style={styles.subtitle}>Tu as propablement un truc à faire</Text>
    </>
  );
}
