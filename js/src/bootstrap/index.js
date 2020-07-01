import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from '../../../app.json';
import SplashScreen from 'react-native-splash-screen';
import { startup } from '../actions/startup';
import appConfig from '../config/app';
/**
 * Initialize internationalization
 */
import I18n from '../utils/i18n'; // eslint-disable-line no-unused-vars

/**
 * Initialize Redux store.
 */
import store from './store';

/**
 * Root component
 */
import Root, { rootReadyPromise } from './Root';

/**
 * Storybook component
 */
const Storybook = appConfig.enableStorybook ? require('../storybook').default : null;

const startupReadyPromise = () => new Promise((resolve) => { store.dispatch(startup(resolve)); });
/**
 * rootReadyPromise should be used to hide splash screen
 */
Promise.all([
  rootReadyPromise
]).then(
  () => startupReadyPromise()
).then(() => {
  SplashScreen.hide();
});

const AppEntry = appConfig.enableStorybook ? Storybook : Root;
AppRegistry.registerComponent(appName, () => AppEntry);

console.disableYellowBox = true; // eslint-disable-line no-console
