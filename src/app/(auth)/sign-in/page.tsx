'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

function page() {
     const {data: session}= useSession()

 if(session){
      return (
    <>
    Signed in as {session.user.email} <br/>
    
    </>
  )
 }
 return (
  <>
  Not signed in <br/>
  <button onClick={()=>signIn()} className='bg-orange-500 px-3 py-1 m-4 rounded'>
    Sign in
  </button>
  </>
 )
}

export default page