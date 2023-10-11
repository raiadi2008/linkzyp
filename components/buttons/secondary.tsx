interface SecondaryButtonParms {
  name: string
}

export default function SecondaryButton({ name }: SecondaryButtonParms) {
  return (
    <button
      type='button'
      className='px-4 py-1 border-2 border-primary text-primary rounded tracking-wider font-medium'
    >
      {name}
    </button>
  )
}
