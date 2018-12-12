import React from "react";
import { StyleSheet, ScrollView, Image, Text, View } from "react-native";
import { WebBrowser } from "expo";
import Touchable from "react-native-platform-touchable";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.optionsTitleText}>Links</Text>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={this._handlePressSource}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../assets/images/github-icon.png")}
                  resizeMode="contain"
                  fadeDuration={0}
                  style={{ width: 20, height: 20, marginTop: 1 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>See project at GitHub</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple("#ccc", false)}
            style={styles.option}
            onPress={this._handlePressSlack}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../assets/images/telegram-icon.png")}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Join us on Telegram</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple("#ccc", false)}
            onPress={this._handlePressForums}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.optionIconContainer}>
                <Image
                  source={require("../assets/images/linkedin-icon.png")}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Ask question to developer</Text>
              </View>
            </View>
          </Touchable>
        </ScrollView>
      </View>
    );
  }

  _handlePressSlack = () => {
    WebBrowser.openBrowserAsync("https://t.me/front_end_developer");
  };

  _handlePressSource = () => {
    WebBrowser.openBrowserAsync("https://github.com/ArtistHam/radio");
  };

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync("https://www.linkedin.com/in/kashapovvas/");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00d4ff",
  },
  optionsTitleText: {
    fontSize: 24,
    marginHorizontal: "40%",
    paddingVertical: 5
  },
  optionIconContainer: {
    marginRight: 9
  },
  contentContainer: {
    marginTop: 20
  },
  option: {
    backgroundColor: "#fdfdfd",
    marginVertical: 2,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  }
});
