import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import TabOneScreen from "@screens/TabOneScreen";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TabTwoScreen from "@screens/TabTwoScreen";
import TabBarIcon from "@components/icons/TabBarIcon";
import type { RootStackParamList } from "./RootNavigator";

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName={"TabOne"}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <Tab.Screen
        name={"TabOne"}
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
