# Work in progress... 🚧

# React Authentication Boilerplate

This repo contains an authentication-based app boilerplate that follows SOLID principles and design patterns.

The app boilerplate provides a clean and organized structure for building authentication-based applications using React. It includes features such as user registration, login, and logout, as well as password reset and email verification.

The code is written in an extensible way, making it easy to add new features or modify existing ones. It also includes comprehensive documentation and unit tests to ensure code quality and maintainability.

## Usage:

```
npm install
npm start
```

## Main Dependencies:

- `react-redux` (with `redux-tookit`) for state management
- `react-router-dom` for routing
- `react-hook-form` (with `yup`) for form validation

## Dev Dependencies:

- `prettier` for code formatting
- `@trivago/prettier-plugin-sort-imports` for sorting imports

## Notes:

- Used kebab case for all file names including components files for imports consistency.
- Added `jsconfig.json` file to allow absolute imports from `src` folder.
- `.prettierrc` file is included in the repo, but you can use your own and run `npm run format` to format the code.
- Used `tailwindcss` for styling the app but feel free to use any other styling library.

## Highlights:

### AuthObserver

Saves time and effort by providing a centralized location for managing the authentication state, localStorage, and auth-based redirections of the app.

```js
import useLocalStorage from 'hooks/use-local-storage';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from 'store/auth';

function AuthObserver({ children }) {
  const [isInit, setIsInit] = useState(true);

  const { user, token } = useSelector(state => state.auth);
  const [savedUser, setSavedUser] = useLocalStorage('user', null);
  const [savedToken, setSavedToken] = useLocalStorage('token', null);

  const dispatch = useDispatch();
  const dispatchLoginFromLocalStorage = useCallback(() => {
    dispatch(login({ user: savedUser, token: savedToken }));
  }, [dispatch, savedUser, savedToken]);

  const inStoreNotInLocal = !!(user && token && !savedUser && !savedToken);
  const inLocalNotInStore = !!(savedUser && savedToken && !user && !token);

  useEffect(() => {
    // Auto login from local storage
    if (inLocalNotInStore && isInit) {
      dispatchLoginFromLocalStorage();
      setIsInit(false);
    }
  }, [inLocalNotInStore, isInit, dispatchLoginFromLocalStorage, setIsInit]);

  useEffect(() => {
    // Save to local storage from store
    if (inStoreNotInLocal && isInit) {
      setSavedUser(user);
      setSavedToken(token);
      setIsInit(false);
    }
  }, [
    inStoreNotInLocal,
    isInit,
    setSavedUser,
    user,
    setSavedToken,
    token,
    setIsInit,
  ]);

  useEffect(() => {
    // Logout
    if (!isInit && !user && !token) {
      setSavedUser(null);
      setSavedToken(null);
      setIsInit(true);
    }
  }, [isInit, user, token, setSavedUser, setSavedToken, setIsInit]);

  return children;
}

export default AuthObserver;
```
