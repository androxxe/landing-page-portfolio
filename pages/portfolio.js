import React, { useState } from 'react'
import { Footer, Header, Menu, Profile, Template } from '../components'
import Image from 'next/image'
import Link from 'next/link'

const menu = [{
  name: 'Information System of Harvest and Transportation PT. Tri Bakti Sarimas',
  description: 'Optimize fields operational on oil palm plantation company',
  slug: 'tbs',
  thumbnail: '/assets/images/portfolio/tbs.jpg'
}, {
  name: 'WarungSegar Application',
  description: 'Easy shopping for your kitchen needs in Pekanbaru City',
  slug: 'warungsegar',
  thumbnail: '/assets/images/portfolio/warungsegar.jpg'
}, {
  name: 'Nginvite.com',
  description: 'Nginvite is an online invitation based on web application with self-service concept which allow user to create and choose design for their invitation',
  slug: 'nginvite.com',
  thumbnail: '/assets/images/portfolio/nginvite.jpg'
}, {
  name: 'Etangkahan',
  description: 'E-Tangkahan is a modern online shopping application based on android and iOS in Medan City',
  slug: 'etangkahan',
  thumbnail: '/assets/images/portfolio/etangkahan.jpg'

}, {
  name: 'MBKM FKIP Negeri',
  description: 'Information system for Communication forum of Faculty of Teacher Training and Education in Indonesia',
  slug: 'mbkm-fkip-negeri',
  thumbnail: '/assets/images/portfolio/mbkm.jpg'
}, {
  name: 'Data Collection Information System for ITWASDA Polda Riau',
  description: 'Data collection information system for Regional Supervision Inspector of Riau Regional Police',
  slug: 'sistem-pendataan-itwasda-polda-riau',
  thumbnail: '/assets/images/portfolio/pendataan.jpg'

}, {
  name: 'AR Culture Education Technology',
  description: 'Augmented Reality application that explains various historical places in Riau Province',
  slug: 'ar-culture-education-technology',
  thumbnail: '/assets/images/portfolio/cet.jpg'

}, {
  name: 'STEM Indonesia',
  description: 'Learning media that can be used for various levels of formal education or other non-formal education',
  slug: 'stem-indonesia',
  thumbnail: '/assets/images/portfolio/stem.jpg'

}, {
  name: 'Landing Page ITWASDA Polda Riau',
  description: 'Landing page for ITWASDA Polda Riau (Regional Supervision Inspector of Riau Regional Police)',
  slug: 'landing-page-itwasda-polda-riau',
  thumbnail: '/assets/images/portfolio/itwasda.jpg'

}]

const PortfolioItem = ({ item }) => {
  return <Link href={`/portfolio/${item.slug}`}>
    <a className="w-[240px] h-[240px] md:w-[200px] md:h-[200px] lg:w-[160px] lg:h-[160px] xl:w-[240px] xl:h-[240px] relative flex justify-center items-center relative drop-shadow-lg rounded-lg">
      <div className="absolute inset-0 bg-cover bg-center text-center z-0 rounded-lg">
        <Image 
          src={item.thumbnail} 
          layout='fill'
          className='rounded-lg'
          objectFit='contain'/>
      </div>
      <div className="opacity-0 rounded-lg hover:opacity-100 px-3 hover:bg-sky-500 duration-300 absolute inset-0 z-10 flex flex-col justify-center items-center text-white font-semibold">
        <p className='mb-2 text-center'>{ item.name }</p>
        <p className='font-normal text-center text-sm'>{ item.description }</p>
      </div>
    </a>
  </Link>
}

const Portfolio = () => {
  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/portfolio'>
        <h2 className='text-sky-500 font-bold text-xl mb-10 mt-5'>MY PORTFOLIO</h2>
        <div className="grid grid-cols-none md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 w-full flex justify-center items-center relative">
          { menu.map((item, index) => 
            <PortfolioItem key={`portfolio_${index}`} item={item} />
          )}
        </div>
      </Template>
    </div>
  )
}

export default Portfolio