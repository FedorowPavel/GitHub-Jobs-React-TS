import styled from 'styled-components'
import React from 'react'
import useGetDateDifference from '../../../custom-hooks/useGetDateDifference'

const StyledWrapper = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  color: ${(props) => props.theme.infoFontColor};
  display: flex;
  font-size: 16px;
  
`

const AdditionalInfo: React.FC<{date: string, location: string}> = ({ date, location }) => {
  const howLongAgoDate = `${useGetDateDifference(date)} ago`

  return (
    <StyledWrapper>
      <span className="material-icons">public</span>
      <span>{ location }</span>
      <span>/</span>
      <span className="material-icons">query_builder</span>
      <span>{ howLongAgoDate }</span>
    </StyledWrapper>
  )
}

export default AdditionalInfo
