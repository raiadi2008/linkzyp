import Image from "next/image"

import logo from "@/public/logo.png"

export default function Logo() {
  return (
    <div className='flex items-center gap-x-4'>
      <Image src={logo} alt='' className='w-10 h-10' />
      <p className='text-xl tracking-widest'>linkzyp</p>
    </div>
  )
}
