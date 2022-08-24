import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {getListItemById} from '../redux/store';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFCMToken();
  }
}

async function getFCMToken() {
  try {
    const oldToken = await AsyncStorage.getItem('fcmtoken');
    if (!oldToken) {
      const newToken = await messaging().getToken();

      console.log(newToken, 'new token');

      await AsyncStorage.setItem('fcmtoken', newToken);
    }
  } catch (error) {
    console.log(error);
  }
}

export function notificationListener(navigation) {
  messaging().onNotificationOpenedApp(remoteMessage => {
    const id = +remoteMessage.data.id;

    const {name, image, origin} = getListItemById(id);

    navigation.navigate('Article', {
      name,
      origin,
      image,
    });
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      const id = +remoteMessage.data.id;

      const {name, image, origin} = getListItemById(id);

      navigation.navigate('Article', {
        name,
        origin,
        image,
      });
    });

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage);
  });
}
