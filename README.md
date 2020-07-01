# react-native-boilerplate
- This is the boilerplate of any react-native project
- This boilerplate used yarn for install dependencies instead of npm

# Local Build
- Create `.env` file by coping `.env.example` file and update it with your env values
    - Make sure you set `ENABLE_STORYBOOK` value to false in your `.env` file if you need to run your real app.
- Make sure you have dependency managers you need, If not you could install them by running following commands:
    - `npm install -g yarn` to install yarn.
    - `sudo gem install cocoapods` to install cocoapods.

 - then run the following commands to install your dependencies:

    - `yarn install` to install packages dependencies.
    - `cd ios` && `pod install` to install pod dependencies.

# Running your React Native application
- For starts Metro Bundler : 
     - Run `yarn start` inside your React Native project folder.
- For start the application run : 
    - For iOS:
        - Run `yarn ios` inside your React Native project folder.
    - For Android:
        - Run `yarn android` inside your React Native project folder.

# Content
## The boilerplate contains:

- React Native (v0.62)
- React  (v16.11.0)
- Redux (v4.0.5) to help manage state
- Redux Sagas (v1.1.3) to separate side-effects and logic from state and UI logic
- React Navigation (v5.3.0) 
- i18next (v19.4.4) 
- Eslint (v6.5.1) & jest (v24.9.0) preconfigured for React Native
- storybook (v5.3.18)
- splashScreen (v3.2.0)
- asyncStorage (v1.11.0)

# Folder Structure:
This is the basic folder structure, This folder structure may evolve with time adding more folders and files as necessary.

```js
. Root
|_ android
|_ ios
|_ js
| |_ assets : `used by the application`
| |  |_ images : `images used in the application`
| |  |_ fonts : `fonts used in the application`
| |_ locales : `Files (en,fr,...) used by the APP for translation`
| |_ src : `application source code`
|   |_ action : `Application actions`
|   |_ api 
|   | |_ adapters
|   | |_ apis :  `Application apis`
|   | |_ factory
|   | |_ mappers : `Map data from and to api `
|   |_ bootstrap : `AppRegistry and middlewares`
|   |_ components : `Presentational components`
|   |_ config : `Configuration of the application`
|   |_ containers : `Container components, i.e. the application's screens `
|   |_ reducers : `specify how the app state changes in response to actions`
|   | |_ __tests__ : `Reducers unit test`
|   |_ saga : `Redux sagas`
|   | |_ api : `Api sagas`
|   | |_ navigation : `Navigation sagas`
|   |_ selectors : `functions that take the state as arg & returns derived data from state`
|   | |_ __tests__ : `Selectors unit test`
|   |_ storybook : `Storybook for component `
|   |_ styles : `Colors ,spacings and fonts `
|   |_ utils : `Helper functions & services i.e. (translation sevice,..)`
|   | |_ api
|   | |_ localStorage
|
|_ node_modules
|_ .eslintrc.js : `eslint rules.`
|_ .env.example : `sample for app env variables.`
|_ .gitignore : `file where each line contains a pattern for files/directories to ignore.`
|_ app.json
|_ babel.config.js
|_ index.js
|_ metro.config.js
|_ package.json
|_ yarn.lock
|_ react-native.config.js
```

# How to link assets folder to android and iOS:

- Step 1: Adding the font to fonts folder inside assets 
- Step 2: run the following command: `react-native link `

 - ### [References] Follow steps in this link 
    - https://medium.com/better-programming/using-custom-fonts-in-react-native-2019-289099609837  

# Using the boilerplate
## To create a new project using the boilerplate:

- clone this repository
- remove the previous git history: `rm -rf .git/` 
- install the npm dependencies by running `yarn install`
- rename the React Native project to your own project name: `yarn run rename -- <YourProjectName>` (the default name is Boilerplate)
- Edit README file 

You can now create a new git repository for your project (using git init) and create the first commit.
