import { ToastAndroid } from 'react-native';

const NotificationService = {
  notify: (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
};

export default NotificationService;
