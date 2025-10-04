'use client'

import { MoveLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-base-100'>
      <div className='grid grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-6'>
        <button
          type='button'
          className='btn btn-circle btn-sm border-0 bg-transparent no-underline shadow-none'
          onClick={() => router.back()}
        >
          <MoveLeft className='size-5' />
        </button>

        <div className='justify-self-center'>
          <Link href='/'>
            <Image src='/image/header.png' alt='logo' width={64} height={32} />
          </Link>
        </div>
      </div>
    </header>
  )
}
