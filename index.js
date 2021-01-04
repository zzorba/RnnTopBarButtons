/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from './App';
import { iconsLoaded, iconsMap } from './NavIcons';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  iconsLoaded.then(() => {
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: '#888',
        style: 'light',
      },
      topBar: {
        title: {
          color: 'white',
          fontSize: 20,
        },
        background: {
          translucent: false,
          color: '#888',
          clipToBounds: false,
        },
      },
      layout: {
        componentBackgroundColor: 'white',
        backgroundColor: 'white',
      },
    });
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'com.myApp.WelcomeScreen',
                      options: {
                        topBar: {
                          rightButtons: [
                            {
                              id: 'add',
                              color: 'white',
                              accessibilityLabel: 'New Deck',
                              icon: iconsMap.add,
                            },
                          ],
                          background: {
                            color: '#44444',
                          },
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'One',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'com.myApp.WelcomeScreen',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Two',
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
});
