import { Header, Template } from '../components'
import Image from 'next/image'

const Skill = ({ src, nama, level }) => {
  return (
    <div className='mb-5 text-center'>
      <Image
        alt={nama}
        src={src}
        width={100}
        height={80}
        objectFit='contain'
      />
      <p>{ nama }</p>
      <p className='text-sm text-gray-600 text-center'>{ level }</p>
    </div>
  )
}

const Service = () => (
  <div className='text-center mb-10'>
    <h1 className='text-sky-500 font-bold text-xl mt-5 mb-5'>MY SERVICES</h1>
    <p className='mb-5'>Give my best effort for every projects. I give a solution with my creative app.</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center">
      <div className="py-5">
        <Image
          alt='Creative ideas'
          src='/assets/images/idea.png'
          width={50}
          height={50}
        />
        <p className='mb-3 font-bold'>Inovative Ideas</p>
        <p className="text-sm text-gray-500">
          I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build the best applications.
        </p>
      </div>
      <div className="py-5">
        <Image
          alt='Clean code'
          src='/assets/images/clean-code.png'
          width={50}
          height={50}
        />
        <p className='mb-3 font-bold'>Clean Code</p>
        <p className="text-sm text-gray-500">
          I always give a clean code to the client so the application is easy to understand and easy to develop.
        </p>
      </div>
      <div className="py-5">
        <Image
          alt='Communication'
          src='/assets/images/conversation.png'
          width={50}
          height={50}
        />
        <p className='mb-3 font-bold'>Good Communication</p>
        <p className="text-sm text-gray-500">
          I always communicate with the client so simply the application is really fit with what client needs.
        </p>
      </div>
      <div className="py-5">
        <Image
          alt='Best Result'
          src='/assets/images/result.png'
          width={50}
          height={50}
        />
        <p className='mb-3 font-bold'>Best Result</p>
        <p className="text-sm text-gray-500">
          I will give you the best applications for your best ideas.
        </p>
      </div>
    </div>
  </div>
)

const Resume = () => {
  return (
    <div>
      <Header title='Andrio Pratama Sirait Site' />
      <Template menu='/resume'>
        <h1 className='text-sky-500 font-bold text-xl mb-10 mt-5'>WORK EXPERIENCE</h1>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
          <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Oct 2019 - 2022
            </time>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Co-founder & CTO WarungSegar
            </h3>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              WarungSegar is a StartUp based on Pekanbaru, Riau that focus to cut food products supply chain. we make fresh products, easy to get for you, directly from farmers.
            </p>
          </li>
          
          <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Oct 2021 - 2022
            </time>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Co-founder Nginvite.com
            </h3>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              Nginvite is StartUp based on Pekanbaru, Nginvite is an online invitation based on web application with self-service concept which allow user to create and choose design for their invitation.
              Nginvite have some invitation type such as wedding, meeting, informal and formal events
            </p>
          </li>

          <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
            </span>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Apr 2021 - 2022
            </time>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Fullstack Developer - SiteMedia
            </h3>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              SiteMedia is a software house, accepts outsourcing of website, android and iOS application development. I work for some project on SiteMedia as fullstack developer
            </p>
          </li>
        </ol>

        <h1 className='text-sky-500 font-bold text-xl mt-5 mb-7'>SKILL</h1>
        <p className='font-bold my-5 underline'>Language</p>
        <div className="grid grid-cols-2 gap-10 text-center mb-10">
          <Skill src='/assets/images/javascript.png' nama='JavaScript' level='Expert '/>
          <Skill src='/assets/images/php.svg' nama='Php' level='Expert '/>
        </div>
        <p className='font-bold my-5 underline'>Framework & Library</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-10 w-full">
          <Skill src='/assets/images/react-native.png' nama='React Native' level='Expert '/>
          <Skill src='/assets/images/react.png' nama='React.js' level='Intermediate '/>
          <Skill src='/assets/images/next.png' nama='Next.js' level='Intermediate '/>
          <Skill src='/assets/images/express.png' nama='Express.js' level='Medium '/>
          <Skill src='/assets/images/laravel.png' nama='Laravel' level='Expert '/>
          <Skill src='/assets/images/ci.png' nama='CodeIgniter' level='Expert '/>
          <Skill src='/assets/images/laravel-livewire.png' nama='Laravel Livewire' level='Intermediate '/>
          <Skill src='/assets/images/sass.png' nama='SASS' level='Intermediate '/>
          <Skill src='/assets/images/jquery.gif' nama='jQuery' level='Intermediate '/>
        </div>
        <p className='font-bold my-5 underline'>Tools</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 text-center mb-10 w-full">
          <Skill src='/assets/images/vscode.png' nama='VSCode' level='Expert '/>
          <Skill src='/assets/images/github.jpg' nama='GitHub' level='Intermediate '/>
          <Skill src='/assets/images/bitbucket.png' nama='BitBucket' level='Intermediate '/>
        </div>
        <Service />
      </Template>
    </div>
  )
}

export default Resume