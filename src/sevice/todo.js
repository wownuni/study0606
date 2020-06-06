import { func } from 'prop-types'

const BASE_URL = 'http://localhost:8000/todo'

/*
 * Todos 목록을 가져온다
 */
export async function fetchTodos() {
  const response = await fetch(BASE_URL)

  if (!response.ok) {
    return []
  }

  //   console.log(response)
  return response.json()
}

/*
 * 새로운 todo를 저장
 */
export async function postTodo(payload) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

/*
 * 상태 update
 */
export async function updateTodo(payload) {
  // {id: 0, title:}
  const response = await fetch(`${BASE_URL}/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  return response.ok
}

/*
 * 상태 del
 */
export async function deleteTodo(id) {
  // {id: 0, title:}
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })

  return response.ok
}
