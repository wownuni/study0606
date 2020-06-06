import React, { useEffect } from 'react'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { fetchTodos } from '../../sevice/todo'
import { useTodoContext } from './context'

function Todo() {
  const { setTodos } = useTodoContext()
  useEffect(() => {
    // console.log('fetch...')
    /*
     * useEffect 는 Async function을 지원하지 안ㄶ습니다.
     * 첫 mount 후에 첫 데이터를 세팅하기 위한 fetch
     */
    async function fetchAndSetTodos() {
      const todos = await fetchTodos()
      setTodos(todos)
    }

    fetchAndSetTodos()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Todo
