/**
 * @format
 */


import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setDefaultOptions({
     statusBar: {
        backgroundColor: 'red',
        style: 'light',
      },
      topBar: {
        title: {
          color: 'white',
          fontSize: 20,
        },
        background: {
          translucent: false,
          color: 'red',
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
         children: [{
           stack: {
             children: [
               {
                 component: {
                   name: 'com.myApp.WelcomeScreen'
                 }
               }
             ],
	           options: {
               bottomTab: {
                text: 'One',
               }
             }
           },
         },
	       {
           stack: {
             children: [
               {
                 component: {
                   name: 'com.myApp.WelcomeScreen'
                 }
               }
             ],
             options: {
               bottomTab: {
                text: 'Two',
               }
             }
           },
         },
       ]
     }
    }
  });
});
