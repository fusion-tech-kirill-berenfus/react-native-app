import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

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

export function notificationListener() {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage);
  });
}
