# RnnTopBarButtons
Contains two current bugs with RNN 7.7.0 that manifest on IOS 12

1) Icon buttons in top bar not having color overridden, on IOS 12 the top button appears blue, while on IOS 13+ it correctly appears as white.
2) Header flicker that occurs when popping RNN screens on IO12. If the top bar color is overridden, when popping screens it will flash to white, despite the color not changing between screens.

This repo was created with create-react-app and had react-native-navigation and react-native-svg-icoins added to it to reproduce these issues.
