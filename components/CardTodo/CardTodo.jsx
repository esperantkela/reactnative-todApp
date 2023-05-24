import { Image, Text, TouchableOpacity } from "react-native";
import checkImg from "../../assets/check.png";
import { styles } from "./CardTodo.style";

export function CardTodo({ todo }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text
        style={[
          styles.txt,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text> 
      {todo.isCompleted && <Image source={checkImg} style={styles.img} />}
    </TouchableOpacity>
  );
}
