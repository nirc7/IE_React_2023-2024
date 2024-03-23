
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';
// import TabbedPageNavigator from './Pages/TabbedPage';
// import MaterialTabbedPage from './Pages/MaterialTabbedPage';


import { createDrawerNavigator } from '@react-navigation/drawer';
import LocationPage from './Pages/LocationPage';
import CameraPage from './Pages/CameraPage';
import AsyncStoragePage from './Pages/AsyncStoragePage';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="FirstPage">
      <Drawer.Screen
        name="FirstPage"
        component={FirstPage}
        options={{ drawerLabel: 'FP' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'SP' }}
      />
      <Drawer.Screen
        name="MaterialTabbedPageNavigator"
        component={MaterialTabbedPageNavigator}
        options={{ drawerLabel: 'MP' }}
      />
      <Drawer.Screen
        name="LocationPage"
        component={LocationPage}
        options={{ drawerLabel: 'LP' }}
      />
      <Drawer.Screen
        name="CameraPage"
        component={CameraPage}
        options={{ drawerLabel: 'CP' }}
      />
      <Drawer.Screen
        name="AsyncStoragePage"
        component={AsyncStoragePage}
        options={{ drawerLabel: 'AP' }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
          <Stack.Screen name="LocationPage" component={LocationPage} />
          <Stack.Screen name="CameraPage" component={CameraPage} />
          <Stack.Screen name="AsyncStoragePage" component={AsyncStoragePage} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}
export default App;