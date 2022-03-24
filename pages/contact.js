import { Header, Template } from '../components'

const Contact = () => {
  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/contact'>
        <div className='flex items-center justify-center flex-col h-full my-10'>
          <h2 className='text-sky-500 font-bold text-xl mb-5'>MY CONTACT</h2>
          <div className='text-center'>
            <p>Jl. Karya Bakti</p>
            <p>Pekanbaru, Indonesia</p>

            <p>28293</p>
            +62 812 2669 6696 | me@andriosirait.com
          </div>
        </div>
      </Template>
    </div>
  )
}

export default Contact