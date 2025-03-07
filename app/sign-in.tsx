import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";

const SignIn = () => {
  const { login, isLogged, loading } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href={"/"} />;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-32 bg-[#FFA500]">
        <View className="flex-row justify-center items-center mt-6 px-4">
          <Image source={images.icon} className="w-20 h-20 ml-1 rounded-lg" resizeMode="contain" />
        </View>
      </View>

      <View className="px-8 pt-8">
        <Text className="text-center text-5xl font-bold">Welcome</Text>
        <Text className="text-gray-500 mt-1 text-center">Sign in using Auth0</Text>

        {/* ✅ Sign In Button */}
        <TouchableOpacity
          onPress={login} // Call login from GlobalProvider
          className="bg-[#6B4423] rounded-full py-4 mt-4"
        >
          <Text className="text-center text-[#FFFFFF]">Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
