import React from 'react'
import CoursesView from './CoursesView'
import { Helmet } from 'react-helmet-async';


const Courses = () => {
  return (
   <>
    <Helmet>
      <title> Courses | ED Tech </title>
    </Helmet>
    <CoursesView/>
   </>
  )
}

export default Courses