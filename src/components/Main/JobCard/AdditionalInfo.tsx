import styled from 'styled-components'
import React from 'react'
import useGetDateDifference from '../../../assets/custom-hooks/useGetDateDifference'

const StyledWrapper = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  color: ${(props) => props.theme.infoFontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

const AdditionalInfo: React.FC<{date: string, location: string}> = ({ date, location }) => {
  const dateDifference = `${useGetDateDifference(date)} ago`
  return (
    <StyledWrapper>
      <span className="material-icons">public</span>
      <span>{location}</span>
      <span>/</span>
      <span className="material-icons">query_builder</span>
      <span>{ dateDifference }</span>
    </StyledWrapper>
  )
}

export default AdditionalInfo
