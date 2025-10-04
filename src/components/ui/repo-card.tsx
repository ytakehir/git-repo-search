import { CircleDot, GitFork, Pen, Star } from 'lucide-react'
import type { RepoSearchResultItem } from '@/types/github'

export function RepoCard(item: RepoSearchResultItem) {
  return (
    <div className='card flex-row items-center justify-center gap-x-4 bg-transparent shadow-none'>
      <div className='card-body gap-0.5 p-1'>
        <a
          className='line-clamp-2 w-full break-all font-semibold text-base-content text-lg underline'
          href={item.html_url}
          target='_blank'
          rel='noopener noreferrer'
          data-testid='title'
        >
          {item.full_name}
        </a>
        <p className='text-base-content/50' data-testid='description'>
          {item.description}
        </p>
        <div className='flex items-center gap-x-1'>
          <Pen className='size-4' />
          <p className='text-base-content' data-testid='language'>
            {item.language}
          </p>
        </div>
        <div className='flex w-fit items-center gap-x-2'>
          <div className='flex w-fit items-center'>
            <Star className='size-4' />
            <p className='ml-1 font-semibold' data-testid='star'>
              {item.stargazers_count}
            </p>
          </div>
          <div className='flex w-fit items-center'>
            <GitFork className='size-4' />
            <p className='ml-1 font-semibold' data-testid='fork'>
              {item.forks_count}
            </p>
          </div>
          <div className='flex w-fit items-center'>
            <CircleDot className='size-4' />
            <p className='ml-1 font-semibold' data-testid='issue'>
              {item.open_issues_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
