# RnnHeaderFlicker
Repro case for a header flicker that occurs when popping RNN screens on IO12

This repo was created with create-react-app and had react-native-navigation added to it to reproduce an IOS12 issue.

If the header is changed to a non-default color, when popping screens it will flash to white, despite the color not changing between screens.
