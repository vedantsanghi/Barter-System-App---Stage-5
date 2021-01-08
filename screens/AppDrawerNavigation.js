import { createDrawerNavigator } from "react-navigation-drawer";
import Drawer from "./Drawer";
import SettingClass from "./Setting";
import { TabNavigator } from "./TabNavigator";

export const DrawerNavigation = createDrawerNavigator(
  {
    Barters: { screen: TabNavigator },
    Settings: { screen: SettingClass },
  },

  { contentComponent: Drawer },
  { initialRouteName: "Barter" }
);
