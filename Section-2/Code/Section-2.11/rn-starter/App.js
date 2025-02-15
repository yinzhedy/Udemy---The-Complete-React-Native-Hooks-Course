import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
//Import created component from ComponentsScreen
import ComponentsScreen from "./src/screens/ComponentsScreen";

//tells us what content to show on screen at given time
  //a tool called React Navigation library that handles navigation
  //navigation - showing different content to users 
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    //add in ComponentsScreen component as option for stack nav to show to user
    Components: ComponentsScreen
  },
  {
    //what the first component showed should be from stack nav
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
