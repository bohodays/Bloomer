import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#4e126b" }}
      >
        <WebView
          source={{ uri: "http://j8a205.p.ssafy.io/" }}
          javaScriptEnabled={true}
          onLoad={console.log("Loaded!")}
          domStorageEnabled={true}
          geolocationEnabled={true}
          style={{ zIndex: 1 }}
          // cacheEnabled={true}
        />
        {loading && (
          <Image
            style={{ zIndex: -1, width: "100%", height: "100%" }}
            source={require("./assets/splash.png")}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e126b",
    alignItems: "center",
    justifyContent: "center",
  },
});
