import Logo from "@/components/Logo/logo"
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
      <section className='' id='hero'></section>
      <section className='' id='features'></section>
      <section className='' id='join-us'></section>
      <section className='' id='faq'></section>
      <section className='' id='footer'></section>
    </main>
  )
}
