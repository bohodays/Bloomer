import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useRef } from "react";
import {
  AppState,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { BackHandler } from "react-native";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

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

  // geoloaction 관련
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      setIsLoading(false);
    } catch (e) {
      Alert.alert("위치정보를 가져올 수 없습니다.");
    }
  };
  getLocation();

  // 음악 끄기 관련
  const handleAppStateChange = (appState) => {
    if (webview.current) {
      console.log(appState === "active" ? "unmute" : "mute");
      webview.current.postMessage(appState === "active" ? "unmute" : "mute");
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    AppState.addEventListener("change", handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, [AppState]);

  // save image
  const SaveToPhone = async (url) => {
    console.log(url);
    Toast.show("image download", {
      duration: 1000,
    });
    const { uri } = await FileSystem.downloadAsync(
      url,
      `${FileSystem.documentDirectory}meme.jpg`
    ).catch((e) =>
      console.log("instagram share failed", JSON.stringify(e), url)
    );

    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted) {
      try {
        const asset = await MediaLibrary.createAssetAsync(uri);
        MediaLibrary.createAlbumAsync("Images", asset, false)
          .then(() => {
            console.log("File Saved Successfully!");
            Toast.show("image save success!!", {
              duration: 1000,
            });
          })
          .catch(() => {
            console.log("Error In Saving File!");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Need Storage permission to save file");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <WebView
          ref={webview}
          source={{ uri: "http://j8a205.p.ssafy.io/" }}
          javaScriptEnabled={true}
          onLoad={console.log("Loaded!")}
          domStorageEnabled={true}
          geolocationEnabled={true}
          style={{ zIndex: 1 }}
          useWebkit
          // 캡쳐 저장 관련
          allowFileAccess={true}
          allowFileAccessFromFileURLs={true}
          allowUniversalAccessFromFileURLs={true}
          mixedContentMode={"always"}
          // 웹뷰 뒤로가기 관련
          injectedJavaScript={`


          function mute(muted) {
            document.querySelectorAll('audio').forEach(audio => {
              audio.muted = muted;
            });
          }
          
          document.addEventListener('message', (e) => {
            if(e.data === 'mute') {
            
              mute(true);
            }
            else if(e.data === 'unmute') {
              mute(false);
            }
          });


 








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
            console.log(state);
            if (state.data === "navigationStateChange") {
              // Navigation state updated, can check state.canGoBack, etc.
              setIsCanGoBack(state.canGoBack);
            }

            if (state.data.type === "download") {
              SaveToPhone(data.url);
            }
          }}
        />

        {/* 로딩 페이지 */}
        {loading && (
          <Image
            style={{ zIndex: -1, width: "100%", height: "100%" }}
            source={require("./assets/loading.png")}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#4e126b",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
