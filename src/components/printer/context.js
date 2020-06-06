import React from 'react'
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

/*
 * 상위 레벨에서 children에 state를 주입하기 위한 컴포넌트
 */
export function PrinterContextProvider({ children }) {
  const [value, setValue] = useState('111')
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  )
}

/*
 * 하위 레벨에서 감싸져있는 context 의 value 접근을 위한 hook
 */
export function usePrinterContext() {
  return useContext(Context)
}

PrinterContextProvider.propTypes = {
  children: PropTypes.element,
}
