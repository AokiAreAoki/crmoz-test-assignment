This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Step 1: Install dependencies

React Native:
```bash
npm i

yarn install
```

Android:
- For this one I just open the `/android` folder through Android Studio and wait for it install everything needed

iOS:
- TODO

## Step 2: Set up environment variables

You need to create or use an existing one project on Google Console with next API services enabled:
- Maps SDK for Android
- Dataform API
- Geocoding API

Go to `android/app/src/main` and `android/app/src/debug`.
There will be `AndroidManifest.example.xml` files.
Copy them both to `AndroidManifest.xml`.
Open them both and insert API key of the Google project in there.

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Have a running emulator or connected phone.

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.