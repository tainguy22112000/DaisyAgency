import React from 'react'
import { Outlet } from 'react-router-dom'
import BackToTop from '~/components/BackToTop'
import { Footer } from '~/components/Footer'
import Header from '~/components/Header'

export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <BackToTop/>
        <Footer/>
    </div>
  )
}
