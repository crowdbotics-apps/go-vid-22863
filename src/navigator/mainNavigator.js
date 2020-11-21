import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial177079Navigator from '../features/Tutorial177079/navigator';
import Maps177078Navigator from '../features/Maps177078/navigator';
import CalendarView177077Navigator from '../features/CalendarView177077/navigator';
import Camera177076Navigator from '../features/Camera177076/navigator';
import EmailAuth177075Navigator from '../features/EmailAuth177075/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial177079: { screen: Tutorial177079Navigator },
Maps177078: { screen: Maps177078Navigator },
CalendarView177077: { screen: CalendarView177077Navigator },
Camera177076: { screen: Camera177076Navigator },
EmailAuth177075: { screen: EmailAuth177075Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
