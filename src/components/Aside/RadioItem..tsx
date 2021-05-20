import React from 'react'

const RadioItem: React.FC<{city: string, name: string}> = (props) => {
  const { city, name } = props
  return (
    <label htmlFor={city}>
      <input
        id={city}
        value={city}
        name={name}
        type="radio"
      />
      <span>{city}</span>
    </label>
  )
}

export default RadioItem
