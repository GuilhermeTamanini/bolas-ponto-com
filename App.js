import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Routes from './src/routes.js'; 

export default function App() {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}