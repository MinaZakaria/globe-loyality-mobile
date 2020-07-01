import { AsyncStorage } from 'react-native';

export const save = async (key, value) => {
  const storedValue = typeof value === 'string' ? value : JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, storedValue);
  } catch (e) {
    throw new Error(e);
  }
};

export const load = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    throw new Error(e);
  }
};

export const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw new Error(e);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw new Error(e);
  }
};
