import React from 'react'
import Image from 'next/image'
import Link  from 'next/link';
import styles from './home.module.css';
export default function Home() {
  return ( 
    <div>
    <header className="border-b-2 border-red-222 bg-dark-111 max-w-full lg:mx-auto xl:px-0 px-4 py-6 flex-wrap flex justify-end items-center">
      <a href="../" className="ml-9">
        <Image
          src="/navbar-img1.e7bad69f.png"
          alt="Rudiq logo"
          width={150}   // width for small screens
          height={50}   // height for small screens
          className="w-[150px] md:w-[175px] lg:w-[200px] xl:w-[250px] h-auto object-contain"
        />
      </a>
      <Link
  href="/signup"
  className="
    bg-gray-600 rounded-lg 
    p-1 sm:p-2 md:p-3 
    text-base sm:text-base md:text-lg lg:text-xl 
    ml-auto mr-4 sm:mr-6 md:mr-9"
>
  Sign In/Sign Up
</Link>
    </header>
  </div>

  );
}
