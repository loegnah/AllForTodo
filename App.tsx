import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw, { useDeviceContext } from "twrnc";

import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import Navigation from "navigation/index";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useDeviceContext(tw);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
