import React from 'react'
import { Text, View } from 'react-native'
import { theme } from '../theme/appTheme'
import CalculatorButton from '../components/CalculatorButton'
import useCalculator from '../hooks/useCalculator'

const CalculatorScreen = () => {
  const {
    prevNumber,
    number,
    setLastPrevNumber,
    setPositiveNegative,
    clearScreen,
    deleteDigit,
    addNumber,
    calculate
  } = useCalculator()

  return (
    <View style={theme.calculatorContainer}>
      {prevNumber !== '0' && <Text style={theme.smallText}>{prevNumber}</Text>}
      <Text style={theme.ResultText} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={theme.calculatorBtnRow}>
        <CalculatorButton onPress={clearScreen} title="C" textColor="black" />
        <CalculatorButton
          onPress={setPositiveNegative}
          title="+/-"
          textColor="black"
        />
        <CalculatorButton onPress={deleteDigit} title="CE" textColor="black" />
        <CalculatorButton
          onPress={() => setLastPrevNumber('divide')}
          title="÷"
          color="yellow"
        />
      </View>

      <View style={theme.calculatorBtnRow}>
        <CalculatorButton onPress={addNumber} title="7" color="dark-gray" />
        <CalculatorButton onPress={addNumber} title="8" color="dark-gray" />
        <CalculatorButton onPress={addNumber} title="9" color="dark-gray" />
        <CalculatorButton
          onPress={() => setLastPrevNumber('multiply')}
          title="x"
          color="yellow"
        />
      </View>

      <View style={theme.calculatorBtnRow}>
        <CalculatorButton onPress={addNumber} title="4" color="dark-gray" />
        <CalculatorButton onPress={addNumber} title="5" color="dark-gray" />
        <CalculatorButton onPress={addNumber} title="6" color="dark-gray" />
        <CalculatorButton
          onPress={() => setLastPrevNumber('subtract')}
          title="-"
          color="yellow"
        />
      </View>

      <View style={theme.calculatorBtnRow}>
        <CalculatorButton onPress={addNumber} title="2" color="dark-gray" />
        <CalculatorButton onPress={addNumber} title="1" color="dark-gray" />
        <CalculatorButton onPress={addNumber} title="3" color="dark-gray" />
        <CalculatorButton
          onPress={() => setLastPrevNumber('add')}
          title="+"
          color="yellow"
        />
      </View>

      <View style={theme.calculatorBtnRow}>
        <CalculatorButton
          onPress={addNumber}
          title="0"
          larger
          color="dark-gray"
        />
        <CalculatorButton onPress={addNumber} title="." color="dark-gray" />
        <CalculatorButton
          onPress={() => calculate()}
          title="="
          color="yellow"
        />
      </View>
    </View>
  )
}

export default CalculatorScreen
