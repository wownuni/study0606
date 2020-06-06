import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function Header({ title = '기본 타이틀' }) {
  //console.log(props)
  return (
    <Container padding="20px 0">
      <Text size="24" bold color="mint">
        {title}
      </Text>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
