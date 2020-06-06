import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Input from '../shared/input'
import Button from '../shared/button'
import Text from '../shared/text'

const INITIAL_VALUES = {
  name: '',
  password: '',
  passwordRe: '',
}

function Form({ onAddUser }) {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({
    isValid: false,
    isMatchedPassword: false,
  })

  useEffect(() => {
    console.log('변화:', values)
    formValidator()
  }, [values]) // eslint-disable-line react-hooks/exhaustive-deps

  const formValidator = () => {
    /**
     * 입력한 비밀번호가 유효한지 ?
     *  input 의 값이 다 every 입력이됐는지 ?
     */
    const { password, passwordRe } = values
    const isMatchedPassword = password && passwordRe && password === passwordRe

    setErrors({
      isMatchedPassword,
      isValid: isMatchedPassword && Object.values(values).every((v) => v),
    })
  }

  const handleInput = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    //TODO 가입
    const { name, password } = values
    // console.log('values', values)

    onAddUser({ name, password })

    setValues(INITIAL_VALUES) // 기본 폼으로 데이터 지워짐.
  }

  return (
    <Container>
      <Container padding="6px 0 30px 0">
        <Text margin="0 0 6px 0" block>
          이름
        </Text>
        <Input
          name="name"
          placeholder="이름입력"
          value={values.name}
          onChange={handleInput}
        />
      </Container>
      <Container padding="6px 0 30px 0">
        <Text margin="0 0 6px 0" block>
          비밀번호
        </Text>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          value={values.password}
          onChange={handleInput}
        />
      </Container>
      <Container padding="6px 0 30px 0">
        <Text margin="0 0 6px 0" block>
          비밀번호 재입력
        </Text>
        <Input
          type="password"
          name="passwordRe"
          placeholder="비밀번호 재입력"
          value={values.passwordRe}
          onChange={handleInput}
        />
        {!errors.isMatchedPassword ? (
          <Text color="red" block margin="5px 0 0 0">
            입력한 비밀번호와 같은 값을 입력해주세요.
          </Text>
        ) : null}
      </Container>
      <Button
        disabled={!errors.isValid}
        margin="10px 0"
        full
        color="blue"
        fontSize="16"
        padding="15px 0"
        onClick={errors.isValid ? handleSubmit : () => {}}
      >
        회원가입
      </Button>
    </Container>
  )
}
Form.propTypes = {
  onAddUser: PropTypes.func,
}
export default Form
