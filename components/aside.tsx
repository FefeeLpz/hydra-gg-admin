"use client"

import Image from 'next/image';
import Link from 'next/link';

const Aside = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <aside className="flex flex-col max-w-60 h-screen bg-neutral-900 border border-neutral-800 rounded-2xl fixed z-10 bottom-0 left-0">
      <Image src="/logohydra.png" width={100} height={100} alt="Logo" className="mt-6 ml-10 mr-6 text-center" />
      <div onClick={() => setActiveSection('profile')} className="mt-6 ml-14 mr-10 cursor-pointer">
        <h2 className="text-neutral-600 hover:text-white font-normal ml-2 transition duration-500">
          Profile
        </h2>
      </div>
      <div onClick={() => setActiveSection('manage')} className="mt-52 ml-6 mr-10 cursor-pointer">
        <h2 className="text-neutral-600 hover:text-white font-normal ml-2 transition duration-500">
          Manage Users
        </h2>
      </div>
      <div onClick={() => setActiveSection('reedemKey')} className="mt-4 ml-6 mr-10 cursor-pointer">
        <h2 className="text-neutral-600 hover:text-white font-normal ml-2 transition duration-500">
          Manage Keys
        </h2>
      </div>
      <div onClick={() => setActiveSection('logout')} className="mt-96 ml-10 mr-10 cursor-pointer">
        <h2 className="text-neutral-600 hover:text-white font-normal ml-2 transition duration-500">
          Logout
        </h2>
      </div>
    </aside>
  )
}

export default Aside;