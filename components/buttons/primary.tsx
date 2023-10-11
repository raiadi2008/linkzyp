interface PrimaryButtonParms {
  name: string
}

export default function PrimaryButton({ name }: PrimaryButtonParms) {
  return (
    <button
      type='button'
      className='px-6 py-2 bg-primary text-button-text-primary rounded tracking-wider font-medium'
    >
      {name}
    </button>
  )
}
