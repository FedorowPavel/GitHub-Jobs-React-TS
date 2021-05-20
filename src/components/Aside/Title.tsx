import React from 'react'

const Title: React.FC<{text: string}> = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  <h2>{props.text}</h2>
)

export default Title
