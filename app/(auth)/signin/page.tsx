"use client";

import React, { useRef } from 'react';
import styles from './App.module.css';
import Link from 'next/link';
import Image from 'next/image';



export default function App() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const mailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const passAgainRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ( mailRef.current&&passRef.current) {
      alert('Email:' +mailRef.current.value+'\nPassword:' +passRef.current.value);
    }
  };
  
  return (
    <div className={styles.container}>
    <header className="border-b-2 border-red-222 bg-dark-111 max-w-full lg:mx-auto xl:px-0 px-4 py-6 flex justify-center">
    <a href="../" className="self-center"> <Image
            src={"/navbar-img1.e7bad69f.png"}
            alt="Rudiq logo"
            width={100} // specify the width in pixels
            height={0}
            style={{
                maxWidth: '100%',
                height: 'auto',
            }}/>
        </a>
        
        </header>
    
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-700 from-30%  max-h-full justify-center flex flex-col">
    <div className="flex flex-wrap flex-col bg-gray-300 m-20 rounded-3xl max-w-3xl self-center lg:min-h-[40vh] lg:min-w-[40vw] bg-opacity-60">
      <div className="flex bg-gray-500 place-self-center rounded-lg p-3 mt-4">

      <p className="text-black self-center font-bold lg:text-5xl md:text-4xl text-xl  "> Sign In</p>   
      </div>
      <div className="py-4"><div className="border-gray-700  border"></div></div>
      <form onSubmit={handleSubmit} style={{ margin: '20px',justifyContent: 'center' , display: 'flex', flexDirection:'column'}}>
        <div className="flex flex-row justify-center">
        <div className="flex  flex-col space-y-10">
            
        <label className={styles.responsiveLabel}>Mail:</label>
      <label className={styles.responsiveLabel}>Password:</label>


            </div>
        <div className="flex  flex-col space-y-5 ml-5" >

            <input type="text" ref={mailRef} className={styles.responsiveInput} />
            <input type="text" ref={passRef} className={styles.responsiveInput}/>
            </div>
            </div>
        <button type="submit"
        className={styles.submitButton}>

        Submit
        </button>
        </form>
    <div className=" self-center mb-10">
      <Link href="/signup" className=' bg-gray-600 rounded-lg p-2   text-xl'>
Do not have an account?
      </Link>
    </div>
    </div>
    

</div>
</div>
   
  );
}

