/* eslint-disable import/no-unresolved */
import React from 'react'
import { Banner } from '~/components/Banner'
import { Footer } from '~/components/Footer'
import Header from '~/components/Header'

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}
