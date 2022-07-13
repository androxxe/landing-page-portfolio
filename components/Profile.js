import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className="bg-sky-500 h-full w-full lg:w-2/5 rounded-tl-lg rounded-bl-lg rounded-tr-lg lg:rounded-tr-none relative">
      <div className="h-[350px] lg:h-full w-full relative">
        <Image
          alt='Foto Andrio Pratama Sirait'
          src='/assets/images/foto-jas.png'
          priority={true}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className="absolute bottom-0 p-5 text-white text-center w-full bg-sky-600 rounded-bl-lg">
        <h2 className="font-bold">Andrio Pratama Sirait</h2>
        <h2 className='text-sm font-light'>Full-stack Developer</h2>
        <div className="flex-1 flex-row justify-center items-center mt-5">
          <a target="_blank" rel='noreferrer' href="https://www.facebook.com/yangngambiltaik/" className='mx-3 text-lg'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.instagram.com/andrio.sirait/" className='mx-3 text-lg'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/andrio-pratama-sirait-632223125/" className='mx-3 text-lg'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile