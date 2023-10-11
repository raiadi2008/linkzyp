import Image from "next/image"

import Logo from "@/components/Logo/logo"
import heroTweet from "@/public/hero-tweet.svg"
import PrimaryButton from "@/components/buttons/primary"
import SecondaryButton from "@/components/buttons/secondary"

export default function Home() {
  return (
    <main className=''>
      <section
        className='flex justify-between items-center max-w-website mx-auto py-4'
        id='navbar'
      >
        <Logo />
        <div className='flex'>
          <ul className='flex gap-x-8'>
            <li>
              <p>Features</p>
            </li>
            <li>
              <p>Why</p>
            </li>
            <li>
              <p>Faq</p>
            </li>
          </ul>
        </div>

        <div className='flex gap-x-4'>
          <SecondaryButton name='Login' />
          <PrimaryButton name='Get Started' />
        </div>
      </section>
      <section className='max-w-website mx-auto pt-20 gap-x-4' id='hero'>
        <div className='flex flex-col justify-center relative'>
          <h1 className='child:block text-center'>
            <span>
              The Ultimate{" "}
              <span className='bg-clip-text text-transparent bg-gradient-to-br from-activity-moderate to-activity-high dark:from-activity-little dark:to-activity-more '>
                Build In Public
              </span>{" "}
              Tool
            </span>
            <span>Create Goals. Share Reports</span>
          </h1>
          <div className=' mt-12 flex gap-x-4 justify-center'>
            <SecondaryButton name='Login' />
            <PrimaryButton name='Get Started' />
          </div>
          <Image src={heroTweet} alt='' className='mx-auto w-3/5' />
        </div>
      </section>
      <section className='max-w-website mx-auto gap-x-4' id='features'>
        <h2 className='text-center'>Features</h2>
      </section>
      <section className='' id='join-us'></section>
      <section className='' id='faq'></section>
      <section className='' id='footer'></section>
    </main>
  )
}
