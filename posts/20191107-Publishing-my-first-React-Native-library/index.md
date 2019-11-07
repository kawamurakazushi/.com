---
title: "Publishing my first React Native library."
date: "2019-11-07"
tags: []
category: "tech"
---

## Introduction

I made a React Native Library called [react-native-loader2](https://github.com/kawamurakazushi/react-native-loader2). It's a very simple overlay loader which is powered by React Hooks.


I wanted to write down some quick introduction of this package, and also to share some of the techniques I learned during the publishing process.

## Usage of the Package

First install the package.

```bash
yarn add react-native-loader2
```

This package uses `React Context` under the hood. You will need to wrap the whole the `<App />` with the library Provider.

```jsx
import { Provider } from "react-native-loader2";

export default function App() {
  return (
    <Provider>
      <View>
        <LoaderButton />
      </View>
    </Provider>
  );
}
```

Then inside any of your components you can call the library hooks to use the loader functionality.

```jsx{1, 4}
import { useLoader } from "react-native-loader2";

export default () => {
  const { showLoader, hideLoader } = useLoader();
  return (
    <Button
      title="Show Loader"
      onPress={async () => {
        showLoader();
        await somethingAsyncThatCanTakeTime();
        hideLoader();
      }}
    />
  );
};
```

If you want to show some text with the loader, you can specify an optional title parameter in `showLoader` function.

```jsx
showLoader("Loading...");
```

### Configuration

I made the library so that the user can configure their loader as much as they want.

To do so you just need to pass the config object to the `Provider`.

```jsx
const config = {
  size: 100,
  backgroundColor: "#444a",
  foregroundColor: "#fff",
  spinnerColor: "gray",
  cornerRadius: 4,
  spinnerComponent: () => <MyFavoriteLoader />
}

export default function App() {
  return (
    <Provider config={config}>
      <App />
    </Provider>
  );
}
```

You can check out the list of configuration [Here](https://github.com/kawamurakazushi/react-native-loader2#list-of-configurations) if you are interested.

## Lesson Learned

I would like to introduce **5** tips I learned while I was making this library.

### 1. Build before publishing

If you are writing your library with typescript, you will need to build the typescript code to javascript in order to publish it to npm.
But you don't want to manually build it every time before publishing, because most likely you'll forget.

You can use the npm scripts feature, by adding `prepublish` field to your package.json.
By doing so you can add any script, that will run before the package is published automatically. In this case `yarn build`.

```json
{
  //...
  "scripts": {
    //...
    "build": "tsc",
    "prepublish": "yarn build",
  }
}
```

You can check out the whole list of useful npm scripts here: [https://docs.npmjs.com/misc/scripts](https://docs.npmjs.com/misc/scripts)

### 2. Whitelisting the files you want to add to the library

Most likely you don't need to publish all of your code into NPM, and sometime you want to keep some part private. You can achieve this by adding `files` field in your package.json.

You add list of files and directory by adding it to the array, like the following example, and only the matched files and directories will be published to npm.

```json
{
  //...
  "files": [
    "lib"
  ],
 }
```

The purpose of this is similar to `.npmignore` but it's while-listing, instead of black-listing.

And you don't have to worry about the important files that you should include when publishing. Theses files will be white-listed by default.

- package.json
- README
- CHANGES / CHANGELOG / HISTORY
- LICENSE / LICENCE
- NOTICE
- The file in the `main` field

### 3. Using Fixpack

[fixpack](https://github.com/henrikjoreteg/fixpack) is a very useful tool to keep your package.json consistent. It's like prettier but for package.json.

What it does is reorder the fields by alphabetical order, and also warn you when some of the important fields are missing.

```bash
npm i -g fixpack
# or
yarn global add fixpack
```

Then run fixpack.
```bash
fixpack
```

Simple but very effective.

### 4. Package versioning

**Basic**

Before making the library I thought doing correct versioning was something very tedious. However tedious things normally have automation tools.

First things I found was the `npm version` command.

These 3 is the most basic usage

- `npm version patch` 1.0.0 => 1.0.**1**
- `npm version minor` 1.0.0 => 1.**1**.0
- `npm version major` 1.0.0 => **2**.0.0

It will create a git release tag as well.<br>
You can see the full documentation here: https://docs.npmjs.com/cli/version

**Event Better Way**

One more thing that is tedious related to versioning is **managing CHANGELOG**.

But by using [standard version](https://github.com/conventional-changelog/standard-version),
if you follow the [Conventional Commit Message](https://www.conventionalcommits.org/en/v1.0.0/) and run `standard-version` it will *bump the version of your package.json*, *updates CHANGELOG.md*, and m*ake a commit automatically* then *tags a new release*.
CHANGELOG.md

So by using this, it will kill 2 birds with 1 stone 🐦

You can add it in your devDependencies.

```bash
yarn add -D standard-version
```

Add add an run scripts in your package.json.

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

Then you can use `yarn release` in place of `npm version` that I wrote previously.


### 5. Setting up peerDependencies for React Native Libraries

peerDependencies is something you need to add in your package.json, and list libraries that the host application needs to install before using this library

In this case it will be `react` and `react-native`.

```json
{
  "peerDependencies": {
    "react": "*",
    "react-native": "*"
  }
 }
```

## Summary

This is it! Thank you for reading this article. and again you can check the the source code of the library in this github repository!

https://github.com/kawamurakazushi/react-native-loader2