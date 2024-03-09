import React from 'react'
import Logo from './logo'
import NavigationBar from './navigation-bar'
import ActionButton from './action-button'

function NavBar() {
  return (
    <div className='flex justify-between items-center p-5 border shadow-sm'>
        <Logo />
        <NavigationBar />
        <ActionButton />
    </div>
  )
}

export default NavBar