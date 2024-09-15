import { CopilotIcon } from '@primer/octicons-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header () {
  
  return(
      <header className='w-full h-20 flex justify-center items-center shadow-md'>
        <nav className='w-full max-w-screen-xl flex mx-auto justify-between items-center'>
          <div>
            <Link href='/'>
              <CopilotIcon size={24} />
              {/* <Image className='cursor-pointer'
                src='/logo.png' 
                alt='logo' 
                width='150' 
                height='50'
              /> */}
            </Link>
          </div>
          <ul className='flex gap-5'>
            <Link href='/about'></Link>

            <Link href='/questions'></Link>
            <Link href='/login'></Link>
            <Link href='/'></Link>
          </ul>
          <div className='flex gap-4 justify-center items-center'>
            <input className='rounded p-3 shadow outline-none blur:shadow-md'
            placeholder='Search product...'
            type='text'/>
          </div>
        </nav>
      </header>
  )
}
