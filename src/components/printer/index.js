import React from 'react'
import Left from './left'
import Right from './right'
import { PrinterContextProvider } from './context'

function Printer() {
  return (
    <PrinterContextProvider>
      <Left />
      <Right />
    </PrinterContextProvider>
  )
}

export default Printer
