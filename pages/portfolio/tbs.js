import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const WarungSegar = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-center text-xl mb-5 mt-5'>Information System of Harvest and Transportation<br />PT. Tri Bakti Sarimas</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/tbs-1.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/tbs-2.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/tbs-3.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/tbs-3.webp' 
            width={200}
            height={400}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          (still development). Tri Bakti Sarimas is a company engaged in oil palm plantations, on its way PT. Tri Bakti Sarimas encountered many operational problems in fields.
          this application digitizes the process in the field, integrate the data and  monitor activity
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-sky-500 underline block' href="https://play.google.com/store/apps/details?id=com.androxxe.tbs">
              Click here (Apps)
            </a>

            <a className='text-sky-500 underline' href="https://tribaktisarimas.com">
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
                <Image src='/assets/images/laravel.jpg' width={100} height={40} objectFit='contain' />
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