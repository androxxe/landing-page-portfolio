import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../../components'
import Image from 'next/image'

const MbkmFkipNegeri = () => {

  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-xl mb-5 mt-5'>Information System For MBKM FKIP NEGERI Indonesia</h2>
        <div className='text-center'>
          <Image 
            src='/assets/images/portfolio/mbkm-1.jpg' 
            width={500}
            height={200}
            objectFit='contain'/>
          <Image 
            src='/assets/images/portfolio/mbkm-2.jpg' 
            width={500}
            height={200}
            objectFit='contain'/>
            <Image 
            src='/assets/images/portfolio/mbkm-3.jpg' 
            width={500}
            height={200}
            objectFit='contain'/>
        </div>
        <p className='mb-3 mt-10 text-justify'>
          This information system is built for Communication forum of Faculty of Teacher Training and Education in Indonesia,
          <br />This information system allows students to choose the courses they want to take at other universities.
          <br />And so this information system manage all the students, course and course assessment data
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-x mt-5 mb-10">
          <div className='p-3 px-5'>
            <p className='font-bold'>Access:</p>
            <a className='text-sky-500 underline' href="https://mbkmfkipnegeri.id/">
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
            </div>
          </div>
        </div>
      </Template>
    </div>
  )
}

export default MbkmFkipNegeri