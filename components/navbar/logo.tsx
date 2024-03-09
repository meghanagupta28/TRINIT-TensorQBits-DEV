import React from 'react'
import Image from 'next/image'
import { Book } from 'lucide-react'

function Logo() {
  return (
    <div>
        <Image 
          src='/Logo (2).png' 
          alt='Logo' 
          height={180} 
          width={150}
        />
    </div>
  )
}

export default Logo