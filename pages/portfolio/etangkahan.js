import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'
import 'react-slideshow-image/dist/styles.css'

const Etangkahan = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-xl mb-5 mt-5'>ETANGKAHAN</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/etangkahan-1.webp' 
            height={400}
            width={200}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/etangkahan-2.webp' 
            height={400}
            width={200}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/etangkahan-3.webp' 
            height={400}
            width={200}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/etangkahan-4.webp' 
            height={400}
            width={200}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          E-Tangkahan is a modern online shopping application based on android and iOS in Medan City
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-sky-500 underline' href="https://play.google.com/store/apps/details?id=com.androxxe.etangkahan">
              Click here
            </a>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Role:</p>
            <p>Fullstack Developer</p>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Technology:</p>
            <div className='grid grid-cols-3 gap-3  mt-5'>
              <div className='text-center'>
                <Image src='/assets/images/laravel.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Laravel</div>
              </div>
              {/* <div className='text-center'>
                <Image src='/assets/images/express.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Express.js</div>
              </div> */}
              <div className='text-center'>
                <Image src='/assets/images/react-native.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>React Native</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default Etangkahan