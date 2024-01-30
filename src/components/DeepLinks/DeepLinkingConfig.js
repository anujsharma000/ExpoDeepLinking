import { Platform, Linking } from 'react-native';
import DeepLinkURIs from './DeepLinkURIs';

const openDeepLink = async (uri, redirectLink) => {
  console.log('Opening deep link:', uri);

  try {
    if (uri) {
      await Linking.openURL(uri);
      console.log('Deep link opened successfully');
    } else {
      console.error('Deep link URI is null or undefined. No redirection performed.');
    }
  } catch (err) {
    console.error('Error opening deep link:', err);
    redirectToStore(redirectLink);
  }
};

const redirectToStore = async (storeLink) => {
  console.log('Redirecting to the app store:', storeLink);

  try {
    if (storeLink) {
      await Linking.openURL(storeLink);
      console.log('Opened in app store successfully');
    } else {
      console.error('App store link is not provided.');
    }
  } catch (err) {
    console.error('Error opening in app store:', err);
  }
};

const handleDeepLinkByType = (deepLinkType) => {
  const deepLinkData = DeepLinkURIs[deepLinkType];

  if (deepLinkData) {
    const uri = deepLinkData[Platform.OS]?.uri;
    const redirectLink = deepLinkData[Platform.OS]?.redirectLink;

    console.log(`Handling deep link type: ${deepLinkType} on ${Platform.OS}`);
    console.log(`Deep link URI: ${uri}`);
    console.log(`Redirect link: ${redirectLink}`);

    if (Platform.OS === 'ios' && redirectLink) {
      console.log('Redirecting to the App Store...');
      Linking.openURL(redirectLink);
    } else {
      console.log('Opening deep link...');
      openDeepLink(uri, redirectLink);
    }
  } else {
    console.error(`Deep link type '${deepLinkType}' not found.`);
  }
};

export {
  handleDeepLinkByType,
};
