type Props = {
  children?: React.ReactNode
}

export default function Popup({ children }: Props) {
  return (
    <div className='absolute h-screen w-screen z-10 bg-background/75 overflow-scroll'>
      <div className='relative mx-auto w-fit my-20 bg-background-light p-12 rounded'>
        {children}
      </div>
    </div>
  )
}
