import React from 'react'
import { Helmet } from 'react-helmet-async';
import ContentSearchesView from './ContentSearchesView';

const ContentSearches = () => {
  return (
    <>
    <Helmet>
        <title>ContentSearches | Edtech </title>
    </Helmet>
    <ContentSearchesView/>
    </>
  )
}

export default ContentSearches