import React, { Component } from 'react'
import { text, number, boolean, select } from '@storybook/addon-knobs'
import Button from '.'

export default {
  title: 'Button',
  components: Button,
}

export const BasicButton = () => (
  <Button
    margin={text('margin')}
    fontSize={number('fontSize', 16)}
    full={boolean('full', false)}
    color={select('color', ['blue', 'mint', 'red', 'black', 'gray'], 'blue')}
  >
    버튼
  </Button>
)

BasicButton.story = {
  name: '기본 버튼',
}
