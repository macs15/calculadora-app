import { StyleSheet } from 'react-native'

export const theme = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black'
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end'
  },
  ResultText: {
    color: 'white',
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'right'
  },
  smallText: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 30,
    textAlign: 'right'
  },
  /* Grilla de bontones */
  calculatorBtnRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  }
})
