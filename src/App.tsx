import React from 'react';
import { StatusBar, View } from 'react-native';
import Home from './pages/Home';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Home />
  </>
);

export default App;
