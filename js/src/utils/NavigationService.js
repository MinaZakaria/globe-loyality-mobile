import { CommonActions } from '@react-navigation/native';

class NavigationService {
  setTopLevelNavigator(navigatorRef) {
    this._topLevelNavigator = navigatorRef;
  }

  navigate(name, params) {
    let action = CommonActions.navigate({ name, params });
    this._topLevelNavigator.dispatch(action);
  }

  goBack() {
    let action = CommonActions.goBack();
    this._topLevelNavigator.dispatch(action);
  }
}

export default new NavigationService;
