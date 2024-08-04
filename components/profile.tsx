"use client"

import { useState } from 'react';
import { dataUser } from '@/data';


const Profile = () => {
    return (
      <section className="flex flex-col overflow w-full bg-neutral-900 p-7 rounded-2xl border border-neutral-800">
        <div className='flex justify-center items-center'>
            <h2 className="text-white font-normal text-2xl mr-3">
              Welcome, Admin!
            </h2>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='text-white font-normal text-xl mt-4'>
            In this Dashboard you can manage your users and keys.
          </h2>
          <h2 className='text-white font-normal mt-4'>
            Click on the left menu to start.
          </h2>
        </div>
        
      </section>
    );
  }
  
  export default Profile;