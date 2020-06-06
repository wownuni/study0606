import React, { useEffect } from 'react'
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

/*
 * 상위 레벨에서 children에 state를 주입하기 위한 컴포넌트
 */
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    // TODO setFilteredTodos
    // console.log(todos)
    setFilter(mapToFilter(todos, filter))
  }, [todos, filter])

  return (
    <Context.Provider value={{ todos, setTodos, filteredTodos }}>
      {children}
    </Context.Provider>
  )
}

/*
 * 하위 레벨에서 감싸져있는 context 의 value 접근을 위한 hook
 */
export function useTodoContext() {
  return useContext(Context)
}

TodoContextProvider.propTypes = {
  children: PropTypes.element,
}

function mapToFilter(todos, filter) {
  switch (filter) {
    case 'ALL': {
      return todos
    }
    case 'TODO': {
      return todos.filter((todo) => !todo.isDone)
    }
    case 'DONE': {
      return todos.filter((todo) => todo.isDone)
    }
    default: {
      return todos
    }
  }
}
