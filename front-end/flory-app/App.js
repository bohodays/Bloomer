import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <WebView
          source={{ uri: "http://j8a205.p.ssafy.io/" }}
          javaScriptEnabled={true}
          onLoad={console.log("Loaded!")}
          domStorageEnabled={true}
          geolocationEnabled={true}
          cacheEnabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
