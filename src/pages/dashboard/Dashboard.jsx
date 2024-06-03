import React from 'react'
import { Helmet } from 'react-helmet-async';

import DashboardView from './Dashboard-View'

const Dashboard = () => {
  return (
    <>
     <Helmet>
        <title> Dashboard | ED Tech </title>
      </Helmet>

      <DashboardView/>
    </>
  )
}

export default Dashboard