'use client'

import { Search } from '@/components/ui/search'
import { TopicCard } from '@/components/ui/topic-card'
import type { RepoSearchResult } from '@/types/github'
import { useHome } from './hooks'

type Props = {
  repo: RepoSearchResult
  topics: string[]
  currentTopic: string
}

export function Home({ repo, topics, currentTopic }: Props) {
  const { handleSearch } = useHome()

  return (
    <div className='flex w-full flex-col items-center gap-y-12 px-6'>
      <div className='w-1/2'>
        <Search topics={topics} onSearch={handleSearch} />
      </div>
      <div className='flex w-1/2 flex-col items-start gap-y-4'>
        <h2 className='font-bold text-xl'>Trend: {currentTopic}</h2>
        <div className='hidden-scrollbar hidden-scrollbar::-webkit-scrollbar flex w-full flex-col flex-nowrap items-center justify-center gap-x-6 overflow-y-auto'>
          <ul className='list w-fit'>
            {repo?.items.length > 0 ? (
              <ul className='list w-fit'>
                {repo.items.map((item, index) => (
                  <li className='list-row' key={item.full_name}>
                    <TopicCard item={item} index={index} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-500 text-sm'>No results found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
