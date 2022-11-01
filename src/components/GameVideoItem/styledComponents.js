import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const LinkGenerate = styled(Link)`
  text-decoration: none;
`

export const GameItem = styled.li`
  width: 250px;
  margin-right: 12px;
  margin-bottom: 12px;
  border-radius: 2px;
  flex-grow: 1;
  @media (max-width: 564px) {
    width: 100%;
  }
`

export const ThumbnailContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 6px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 250px;
  @media (max-width: 564px) {
    height: 300px;
  }
  @media (max-width: 664px) and (min-width: 564px) {
    height: 340px;
  }
  @media (max-width: 768px) and (min-width: 793px) {
    height: 450px;
  }
`
export const TextContainer = styled.div``

export const Title = styled.p`
  color: #0f0f0f;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 6px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ViewsText = styled.p`
  color: #475569;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const TitleDark = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 6px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
export const ViewsTextDark = styled.p`
  color: #64748b;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
