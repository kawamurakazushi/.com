---
title: "Linking Firebase anonymous user to an actual user in React Native"
date: "2019-10-28"
tags: ["firebase", "react-native"]
category: "tech"
---

## Requirements
- React Native
- Firebase

## The Steps, and Why

In many application, letting the end user signing up is quite hard, and lots of users leave before creating an account.

By using firebase's anonymous user , it solves part of this issue. Users can use the app without having to input their credentials.
(And there's quite a few other benefits as well like security but we will not cover this here.)

But as a app developer we need to let user link the anonymous user to a permanent account if they want to.
The use cases are, if an user wants to enjoy the whole feature, or if they are switching phones and need to take over the data that they posted of liked while being an anonymous user.


This is a simple `signInWithFacebook` functions that I made to link the anonymous user with a facebook account.

```js
const signInWithFacebook = async () => {
  const res = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (res.isCancelled) {
    return;
  }

  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    return;
  }

  const credential = firebase.auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  const user = auth().currentUser;

  if (user) {
    await user.linkWithCredential(credential);
    return;
  }

  await firebase.auth().signInWithCredential(credential);
};
```

### What this does
1. Facebook Login screen will prompt.
1. User will Login using their facebook account.
1. If the user is already logged in (meaning its logged in as an anonymous user), link the account using `user.linkWithCredential`.
1. If not user will be signed in by `firebase.auth().signInWithCredential`.


## Reference

[https://firebase.google.com/docs/auth/web/anonymous-auth](https://firebase.google.com/docs/auth/web/anonymous-auth)