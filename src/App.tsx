import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'
import { Container } from './styles'

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </Container>
  )
}
