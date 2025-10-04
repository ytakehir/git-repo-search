import { Alfa_Slab_One } from 'next/font/google'
import { RepoCard } from '@/components/ui/repo-card'
import { cn } from '@/lib/tailwind'
import type { RepoSearchResultItem } from '@/types/github'

const alfa = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin']
})

type Props = {
  item: RepoSearchResultItem
  index: number
}

export function TopicCard({ item, index }: Props) {
  return (
    <div className='flex items-center gap-x-20'>
      <p
        className={cn(
          'mt-5 font-extrabold text-6xl',
          'text-base-content/50 drop-shadow-base-content/70 drop-shadow-sm',
          index + 1 === 1 && 'text-yellow-500/70 drop-shadow-sm drop-shadow-yellow-600/70',
          index + 1 === 2 && 'text-gray-500/70 drop-shadow-gray-600/70 drop-shadow-sm',
          index + 1 === 3 && 'text-yellow-700/70 drop-shadow-sm drop-shadow-yellow-800/70',
          alfa.className
        )}
        data-testid='index'
      >
        {index + 1}
      </p>
      <RepoCard {...item} />
    </div>
  )
}
