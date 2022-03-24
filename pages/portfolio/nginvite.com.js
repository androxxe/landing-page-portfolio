import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const Nginvite = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-xl mb-5 mt-5'>NGINVITE.COM</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/nginvite-1.jpg' 
            width={600}
            height={300}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/nginvite-2.jpg' 
            width={600}
            height={300}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Nginvite is online invitation based on web application with self-service concept which allow user to create and choose design for their invitation
          <br/>Nginvite was launched in December 2021 and can be accessed via url www.nginvite.com
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-sky-500 underline' href="https://nginvite.com/">
              Click here
            </a>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Role:</p>
            <p>Fullstack Developer & CEO</p>
          </div>
          <div className='p-3 px-5'>
            <p className='font-bold'>Technology:</p>
            <div className='grid grid-cols-3 gap-3  mt-5'>
              <div className='text-center'>
                <Image src='/assets/images/laravel.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Laravel</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default Nginvite