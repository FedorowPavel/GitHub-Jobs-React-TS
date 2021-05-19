import React from 'react'

import Button from '../UI/Button'
import InputSearch from '../UI/InputSearch'

function HeaderSearchForm(): JSX.Element {
  return (
    <form>
      <InputSearch type="text" />
      <Button type="submit">Search</Button>
    </form>
  )
}

export default HeaderSearchForm
