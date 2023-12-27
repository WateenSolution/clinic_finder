import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainAppNav from './src/navigation';
import store, {persistor} from './src/redux/store/store';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainAppNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
