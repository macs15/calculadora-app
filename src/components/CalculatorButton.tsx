import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  title: string
  color?: 'dark-gray' | 'yellow' | 'light-gray'
  textColor?: 'white' | 'black'
  larger?: boolean
  onPress: (btnText: string) => void
}
interface Colors {
  'light-gray': string
  'dark-gray': string
  yellow: string
}

const CalculatorButton = ({
  title,
  color = 'light-gray',
  textColor = 'white',
  larger = false,
  onPress
}: Props) => {
  const COLORS: Colors = {
    'light-gray': '#9B9B9B',
    'dark-gray': '#2D2D2D',
    yellow: '#FF9427'
  }

  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        width: larger ? '50%' : styles.btn.width,
        backgroundColor: COLORS[color]
      }}
      onPress={() => onPress(title)}>
      <View>
        <Text style={{ ...styles.btnText, color: textColor }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CalculatorButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#9B9B9B',
    height: 80,
    width: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 100
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  }
})
