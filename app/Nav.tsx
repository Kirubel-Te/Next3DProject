import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="flex w-full items-center justify-between px-6 py-3 md:px-10">
        <Link href='/'>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Image src="/printforge-logo.svg" alt="Printforge Logo" width={130} height={130} />
            </div>
            <div className="md:hidden">
              <Image src="/printforge-logo-icon.svg" alt="Printforge Logo" width={46} height={46} />
            </div>
          </div>
        </Link>

        <div className="flex items-center">
          <ul className="flex items-center gap-4 text-md font-medium text-slate-700 md:gap-8 md:text-lg">
            <li>
              <Link className="transition-colors hover:text-slate-900" href="/3d-models">
                3D Models
              </Link>
            </li>
            <li>
              <Link className="transition-colors hover:text-slate-900" href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
