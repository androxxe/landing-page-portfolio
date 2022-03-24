import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const ArCET = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-xl mb-5 mt-5'>AR CULTURE EDUCATION TECHNOLOGY</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/cet-1.webp' 
            width={500}
            height={200}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/cet-2.webp' 
            width={500}
            height={200}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          Augmented Reality application that explains various historical places in Riau Province
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-sky-500 underline' href="https://play.google.com/store/apps/details?id=com.cet.ar">
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
                <Image src='/assets/images/unity.png' width={100} height={40} objectFit='contain' />
                <div className='text-sm'>Unity</div>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default ArCET