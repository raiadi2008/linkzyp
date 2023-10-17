"use client"

import Image from "next/image"
import { signIn } from "next-auth/react"

import googleIcon from "@/public/google-icon.svg"
import githubIcon from "@/public/github-icon.png"

export default function Page() {
  return (
    <main className='h-screen w-screen relative bg-sign-in-background-light dark:bg-sign-in-background-dark bg-cover'>
      <section className='max-w-website mx-auto flex  pt-24 justify-center items-center child:py-12'>
        <div className='flex gap-y-8 flex-col w-96 child:w-full pr-8 border-r border-border'>
          <button
            onClick={(e) => signIn("google")}
            className='flex gap-x-4 items-center px-4 py-2 border rounded justify-center border-border'
          >
            <Image src={googleIcon} alt='' className='w-10 h-10' />
            <p>Signin with Google</p>
          </button>
          <button
            onClick={(e) => signIn("github")}
            className='flex gap-x-4 items-center px-4 py-2 border rounded justify-center border-border'
          >
            <Image src={githubIcon} alt='' className='dark:invert w-10 h-10' />
            <p>Signin with Github</p>
          </button>
        </div>
        <div className='flex w-96 child:w-full pl-8'>
          <h3>Begin your Indie Hacker journey here</h3>
        </div>
      </section>
    </main>
  )
}
