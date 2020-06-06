import React from 'react'
import PropTypes from 'prop-types'

import Form from './form'

function Body({ onAddUser }) {
  return (
    <div>
      <Form onAddUser={onAddUser} />
    </div>
  )
}

Body.propTypes = {
  onAddUser: PropTypes.func,
}
export default Body
