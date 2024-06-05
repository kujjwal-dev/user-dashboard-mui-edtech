import React from 'react'
import { Helmet } from 'react-helmet-async';
import ProfileView from './ProfileView';

const Profile = () => {
  return (
    <>
    <Helmet>
      <title> Profile | ED Tech </title>
    </Helmet>
    <ProfileView/>
    </>
  )
}

export default Profile