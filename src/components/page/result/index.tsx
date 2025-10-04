'use client'

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { RepoCard } from '@/components/ui/repo-card'
import { Search } from '@/components/ui/search'
import type { RepoSearchResultWithLink } from '@/types/github'
import { useResult } from './hooks'

type Props = {
  repo: RepoSearchResultWithLink
  topics: string[]
}

export function Result({ repo, topics }: Props) {
  const { q, page, handleSearch, handlePage } = useResult()

  return (
    <div className='flex w-full flex-col items-center gap-y-12 px-6'>
      <div className='w-1/2'>
        <Search topics={topics} onSearch={handleSearch} />
      </div>
      <div className='flex w-1/2 flex-col items-start gap-y-4'>
        <h2 className='font-bold text-xl'>Result: {q}</h2>
        <div className='hidden-scrollbar hidden-scrollbar::-webkit-scrollbar flex w-full flex-col flex-nowrap items-center justify-center gap-x-6 overflow-y-auto'>
          {repo?.data.items.length > 0 ? (
            <ul className='list w-fit'>
              {repo.data.items.map((item) => (
                <li className='list-row' key={item.full_name}>
                  <RepoCard {...item} />
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-gray-500 text-sm'>No results found.</p>
          )}
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        <div className='join mt-5'>
          <button
            type='button'
            className='join-item btn'
            disabled={!repo.links.first}
            onClick={() => handlePage(repo.links.first)}
          >
            <ChevronsLeft className='size-4' />
          </button>
          <button
            type='button'
            className='join-item btn'
            disabled={!repo.links.prev}
            onClick={() => handlePage(repo.links.prev)}
          >
            <ChevronLeft className='size-4' />
          </button>
          <div className='join-item btn'>{page} page</div>
          <button
            type='button'
            className='join-item btn'
            disabled={!repo.links.next}
            onClick={() => handlePage(repo.links.next)}
          >
            <ChevronRight className='size-4' />
          </button>
          <button
            type='button'
            className='join-item btn'
            disabled={!repo.links.last}
            onClick={() => handlePage(repo.links.last)}
          >
            <ChevronsRight className='size-4' />
          </button>
        </div>
      </div>
    </div>
  )
}
