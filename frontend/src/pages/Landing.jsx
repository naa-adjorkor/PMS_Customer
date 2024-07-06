import React from 'react'
import {Navbar} from '../components/Navbar'
import { Header } from '../components/Header'
import {Footer} from '../components/Footer'
import { Customer } from '../components/Customer'

export const Landing = () => {
    return (
    <>
    <Navbar/>
    <Header/>
    <Customer/>
    <Footer/>
    </>
    )
}
