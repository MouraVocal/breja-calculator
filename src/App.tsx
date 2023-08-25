import React from 'react'
import LottieView from 'lottie-react-native'
import { Container } from './styles'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <Container>
      <LottieView
        autoPlay
        source={require('./assets/lottie/beer.json')}
        resizeMode="cover"
      />
      <StatusBar style="auto" />
    </Container>
  )
}
