import React from 'react'
import styled from 'styled-components'
import numberToArrayDiapason from '../../../utils/numberToArrayDiapason'

const UlStyled = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0;
`
interface MyProps {
    isActive: boolean
}

const BtnStyled = styled.button<MyProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  padding: 6px;
  color: ${(props) => (props.isActive ? 'white' : `${props.theme.infoFontColor}`)} ;
  border: 1px solid ${(props) => props.theme.infoFontColor};
  border-radius: 4px;
  background-color: ${(props) => (props.isActive ? `${props.theme.primaryColor}` : 'transparent')};
  margin-right: 12px;
  cursor: pointer;


  &:hover {
    transform: scale(1.03);
    color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
  }
`

const Wrapper = styled.div`
display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Pagination: React.FC<{
    currPage: number,
    numberOfPages: number,
    switchPageHandler: any,
    nextPageHandler: any,
    prevPageHandler: any,
}> = ({
  currPage,
  numberOfPages,
  switchPageHandler,
  nextPageHandler,
  prevPageHandler
}) => {
  const arrayOfPages = numberToArrayDiapason(numberOfPages)

  return (
    <Wrapper>
      <BtnStyled isActive={false} onClick={prevPageHandler}>&lt;</BtnStyled>
      <UlStyled>
        {arrayOfPages.map((item) => {
          const isActive = currPage === item

          return (
            <li
              key={item}
              onClick={() => switchPageHandler(item)}
            >
              <BtnStyled
                isActive={isActive}
              >
                {item}
              </BtnStyled>
            </li>
          )
        })}
      </UlStyled>
      <BtnStyled isActive={false} onClick={nextPageHandler}>&gt;</BtnStyled>
    </Wrapper>
  )
}

export default Pagination
