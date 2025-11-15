import React from 'react' 
import Hello from '../cpomponant/helo';
import Link from 'next/link';

const Home = () => {

  console.log("hello world");
  return (
    <>
    <div className='text-5xl underline'>Welcom to next </div>
     <Hello/>

     <Link href="/dashboard/users">Go to Users</Link>
    </>
  );
}

export default Home