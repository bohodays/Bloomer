import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useRef } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { BackHandler } from "react-native";

export default function App() {
  // 로딩페이지 관련
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // 웹뷰 뒤로가기 관련
  const webview = useRef();
  const [isCanGoBack, setIsCanGoBack] = useState(false);
  const onPressHardwareBackButton = () => {
    if (webview.current && isCanGoBack) {
      webview.current.goBack();
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener(
      "hardwareBackPress",
      onPressHardwareBackButton
    );
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        onPressHardwareBackButton
      );
    };
  }, [isCanGoBack]);

  return (
    <View style={styles.container}>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#4e126b" }}
      >
        <WebView
          ref={webview}
          source={{ uri: "http://j8a205.p.ssafy.io/" }}
          javaScriptEnabled={true}
          onLoad={console.log("Loaded!")}
          domStorageEnabled={true}
          geolocationEnabled={true}
          style={{ zIndex: 1 }}
          // 웹뷰 뒤로가기 관련
          injectedJavaScript={`
        (function() {
          function wrap(fn) {
            return function wrapper() {
              var res = fn.apply(this, arguments);
              window.ReactNativeWebView.postMessage('navigationStateChange');
              return res;
            }
          }
    
          history.pushState = wrap(history.pushState);
          history.replaceState = wrap(history.replaceState);
          window.addEventListener('popstate', function() {
            window.ReactNativeWebView.postMessage('navigationStateChange');
          });
        })();
    
        true;
      `}
          onMessage={({ nativeEvent: state }) => {
            if (state.data === "navigationStateChange") {
              // Navigation state updated, can check state.canGoBack, etc.
              setIsCanGoBack(state.canGoBack);
            }
          }}
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
