import React, { useState, useEffect } from 'react'

import Header from '../../components/signup/header'
import Body from '../../components/signup/body'
import Footer from '../../components/signup/footer'
import Container from '../../components/shared/container'

function Signup() {
  const [users, setUsers] = useState([
    // { name: '가', password: '1234' },
    // { name: '나', password: '1234' },
    // { name: '다', password: '1234' },
  ])

  useEffect(() => {
    // console.log(localStorage.getItem('users'))
    const users = localStorage.getItem('users')
    if (users) {
      setUsers(JSON.parse(users))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])
  const handleAddUser = (user) => {
    // console.log(user)

    setUsers([...users, user]) // ...으로 받으면 새로운 배열이 생김.?
  }

  // function handleAddUser(user){
  //   console.log(user)
  // }

  return (
    <Container maxWidth="720" centered>
      <Header title="회원가입 페이지" />
      <Body onAddUser={handleAddUser} />
      <Footer users={users} />
    </Container>
  )
}

export default Signup
