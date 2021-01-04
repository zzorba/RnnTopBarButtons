import { forEach, keys, map } from 'lodash';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const icons: {
  [iconName: string]: [number, string, any];
} = {
  add: [28, '#888888', MaterialIcons],
};


const iconsMap: {
  [key: string]: number;
} = {};

const iconsLoaded = new Promise((resolve) => {
  Promise.all(
    map(icons, ([size, color, Provider], iconName) => {
      return Provider.getImageSource(iconName, size, color);
    })
  ).then(sources => {
    forEach(keys(icons), (iconName, idx) => {
      iconsMap[iconName] = sources[idx] as number;
    });

    // Call resolve (and we are done)
    resolve(true);
  });
});

export {
  iconsMap,
  iconsLoaded,
};
