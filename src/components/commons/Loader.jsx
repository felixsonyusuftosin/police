import React from 'react'
import {  Columns, Table  } from '../mainPage/styles'
import Skeleton from '@material-ui/lab/Skeleton'

export const Loader = () => { 
  return (
    <Table>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
      <Columns numberCols={5}>
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
        <Skeleton width='100%' height='50px' animation='wave' />
      </Columns>
    </Table>
  )
}