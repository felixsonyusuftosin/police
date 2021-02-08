import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 100px  auto;
  grid-gap: 10px;
`
export const PageHeader = styled.div`
 padding: 0px;
 font-size: 20px; 
 font-weight: 500;
 padding: 0;
 margin: 0;
 color: #222;
 line-height: 30px;
  & h2 { 
    padding: 0;
    margin: 0;
    line-height: 30px;
  }
  & .sub-header { 
    font-size: 14px;
    line-height: 16px;
    color: #666;
    font-weight: 400;
  }
`

export const Toolbar = styled.div`
 background: rgba(0,0,0,0.02);
 border: solid 1px rgba(0,0,0,0.1);
`
export const Table = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px rgba(0,0,0,0.08);
  overflow: auto;
`
export const Columns = styled.div`
  display: grid;
  border-bottom: solid 1px rgba(0,0,0,0.08);
  grid-gap: 5px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  padding: 0px 10px; 
  color: #222;
  box-sizing: border-box;
  grid-template-columns: ${({numberCols}) =>  `repeat(${numberCols}, 1fr)` };
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & div { 
    padding: 0px 5px;
    box-sizing: border-box;
  }
`
export const ColumnsHeader = styled.div`
  display: grid;
  background: rgba(0,0,0,0.03);
  background: rgba(0,0,0,0.05);
  text-transform: capitalize;
  grid-gap: 5px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  padding: 0px 10px; 
  color: #222;
  box-sizing: border-box;
  grid-template-columns: ${({numberCols}) =>  `repeat(${numberCols}, 1fr)` };
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  & div { 
    padding: 0px 5px;
    box-sizing: border-box;
  }
`

export const Header = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #666;
`