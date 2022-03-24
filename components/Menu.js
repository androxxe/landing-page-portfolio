import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFile, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Menu = ({active}) => {
  const menuList = [{
    name: 'Home',
    route: '/',
    icon: faHouse
  }, {
    name: 'Profile',
    route: '/profile',
    icon: faUser
  }, {
    name: 'Resume',
    route: '/resume',
    icon: faFile
  }, {
    name: 'Portfolio',
    route: '/portfolio',
    icon: faBriefcase
  }, {
    name: 'Contact',
    route: '/contact',
    icon: faAddressBook
  }]

  return (
    <div className="flex justify-center space-x-4 p-5 bg-gray-100 shadow-sm rounded-tr-lg">
      { menuList.map((item, index) => (
        <Link key={`menu_${index}`} href={item.route}>
          { active == item.route ? (
            <a className="rounded-lg px-3 py-2 text-slate-700 bg-slate-200 hover:bg-slate-200 hover:text-slate-900">
              <div className='md:hidden'>
                <FontAwesomeIcon className='text-sky-500' icon={item.icon} />
              </div>
              <div className='hidden md:block font-bold text-sky-500'>{ item.name }</div>
            </a>
          ) : ( 
            <a className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-200 hover:text-slate-900">
              <div className='md:hidden'>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className='hidden md:block font-medium'>{ item.name }</div>
            </a>
          )}
        </Link>
      ))}
    </div>
  )
}

export default Menu