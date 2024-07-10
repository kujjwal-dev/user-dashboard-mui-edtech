import React from 'react'
import ProgressView from './ProgressView'
import { Helmet } from 'react-helmet-async';


const Progress = () => {
  return (
    <>
    <Helmet>
        <title>Progress | Edtech </title>
    </Helmet>
    <ProgressView/>
    </>
  )
}

export default Progress