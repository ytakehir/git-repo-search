import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'

export function Footer() {
  return (
    <footer className='footer footer-horizontal footer-center w-screen rounded bg-base-300 p-10 text-base-content'>
      <div className='justify-self-center'>
        <Link href='/'>
          <Image src='/image/header.png' alt='logo' width={128} height={32} />
        </Link>
      </div>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a
            className='flex items-center gap-x-2'
            href='https://github.com/ytakehir/git-repo-search'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='size-6' />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by GRS</p>
      </aside>
    </footer>
  )
}
