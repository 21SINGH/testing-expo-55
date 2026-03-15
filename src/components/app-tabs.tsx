import { NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

export default function AppTabs() {
  return (
    <NativeTabs
      tintColor={Platform.OS === "ios" ? "yellow" : "black"}
      minimizeBehavior="onScrollDown"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="house.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="communities">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="globe" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="create">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="photo.fill.on.rectangle.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="ama">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon sf="person.fill" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="notification" role="search">
        <NativeTabs.Trigger.Label hidden />
        <NativeTabs.Trigger.Icon
          sf={{ default: "camera.fill", selected: "camera.fill" }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
