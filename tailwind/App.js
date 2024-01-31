import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import tw, { useAppColorScheme } from "twrnc";

export default function App() {
  const [colorScheme, toggleColorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';

  const [button1Style, setButton1Style] = useState({
    backgroundColor: isDarkMode ? tw`bg-blue-400` : tw`bg-red-600`,
    shadow: tw`shadow-lg`,
  });

  const [button2Style, setButton2Style] = useState({
    backgroundColor: isDarkMode ? tw`bg-red-400` : tw`bg-blue-400`,
    shadow: tw`shadow-lg`,
  });

  const [imageToggle, setImageToggle] = useState(true);

  const changeButtonColor = () => {
    setButton1Style((prevStyle) => ({
      backgroundColor: prevStyle.backgroundColor === (isDarkMode ? tw`bg-blue-400` : tw`bg-red-600`)
        ? (isDarkMode ? tw`bg-purple-600` : tw`bg-indigo-400`)
        : (isDarkMode ? tw`bg-red-600` : tw`bg-blue-400`),
      shadow: prevStyle.shadow,
    }));

    setButton2Style((prevStyle) => ({
      backgroundColor: prevStyle.backgroundColor === (isDarkMode ? tw`bg-red-400` : tw`bg-blue-600`)
        ? (isDarkMode ? tw`bg-purple-600` : tw`bg-indigo-400`)
        : (isDarkMode ? tw`bg-blue-600` : tw`bg-red-400`),
      shadow: prevStyle.shadow,
    }));
  };

  

  const changeImage = () => {
    // Cambiar entre las dos imágenes al presionar el botón
    setImageToggle((prevToggle) => !prevToggle);
  };

  // Obtener la fuente de la imagen según el estado imageToggle
  const imageSource = imageToggle
    ? require('../tailwind/assets/chimuelo.gif')
    : require('../tailwind/assets/platano.gif');

  const resetImage = () => {
    // Resetear la imagen a chimuelo.gif
    setImageToggle(true);
  };

  return (
    <View style={[tw`flex h-full items-center justify-center bg-gray-200 dark:bg-gray-600`]}>
      <Image source={imageSource} />
      
      <TouchableOpacity
        onPress={() => {
          changeButtonColor();
          toggleColorScheme();
        }}
        style={[tw`py-3 px-6 rounded mt-6 mb-4`, button1Style.shadow, button1Style.backgroundColor]}
      >
        <Text style={tw`text-white font-bold`}>Cambiar color</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => changeImage()}
        style={[tw`py-3 px-6 rounded mt-6 mb-4`, button2Style.shadow, button2Style.backgroundColor]}
      >
        <Text style={tw`text-white font-bold`}>Cambiar imagen</Text>
      </TouchableOpacity>
    </View>
  );
}
