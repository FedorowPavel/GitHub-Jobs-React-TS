import styled from 'styled-components'
import React from 'react'
import { useDispatch } from 'react-redux'
import useGetDateDifference from '../../../custom-hooks/useGetDateDifference'
import { jobsActions } from '../../../store/jobsSlice'

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
  const dispatch = useDispatch()
  // const test: string = useSelector((state: RootState) => state.test.name)
  // eslint-disable-next-line no-console
  // console.log(test)

  const onClickHandler = () => {
    dispatch(jobsActions.fetchJobs())
  }

  return (
    <StyledWrapper>
      <span className="material-icons" onClick={onClickHandler}>public</span>
      <span>{ location }</span>
      <span>/</span>
      <span className="material-icons">query_builder</span>
      <span>{ howLongAgoDate }</span>
    </StyledWrapper>
  )
}

export default AdditionalInfo
