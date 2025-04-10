import { Text, View } from "react-native";
import unboarding from "./unboarding";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center items-center">
      <Text className="text-5xl text-blue-500 font-bold text-primary">Erico Nwa Aba</Text>
      <Text className="text-2xl text-blue-500 font-bold text-accent">Welcome to OpenCode</Text>
      <Link href="/unboarding">Unboarding</Link> 
    </View>
  );
}
