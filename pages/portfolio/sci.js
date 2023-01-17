import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const WarungSegar = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-center text-xl mb-5 mt-5'>Information System for Smart Center Indonesia</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/sci-1.jpg' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/sci-2.jpg' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/sci-3.jpg' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/sci-3.jpg' 
            width={200}
            height={400}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Smart Center Indonesia is a Tutoring Center, Private Lessons to Home, Courses for All Levels of Education and the General in Pekanbaru. This application manage from scheduling, student attendance to payroll
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-sky-500 underline block' href="https://play.google.com/store/apps/details?id=com.androxxe.sci">
              Click here (Android)
            </a>

            <a className='text-sky-500 underline block' href="https://apps.apple.com/us/app/smart-center-indonesia/id6443511260">
              Click here (iOS)
            </a>

            <a className='text-sky-500 underline' href="https://smartcenterindonesia.id">
              Click here (Web)
            </a>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Role:</p>
            <p>Fullstack Developer</p>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Technology:</p>
            <div className='grid grid-cols-3 gap-3 mt-5'>
              <div className='text-center'>
                <Image src='/assets/images/laravel.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Laravel</div>
              </div>
              <div className='text-center'>
                <Image src='/assets/images/react-native.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>React Native</div>
              </div>
              <div className='text-center'>
                <Image src='/assets/images/react.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>React.js</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default WarungSegar