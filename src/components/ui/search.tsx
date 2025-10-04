import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type { FormEventHandler } from 'react'

type Props = {
  onSearch: (q: string) => void
  topics: string[]
}

export function Search({ topics, onSearch }: Props) {
  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const q = form.get('q') || ''
    onSearch(String(q))
  }

  return (
    <div className='flex w-full flex-col gap-y-4'>
      <form className='join w-full' onSubmit={handleSubmit}>
        <label className='input validator join-item w-full focus-within:outline-0 focus:outline-0'>
          <input type='search' name='q' placeholder='search repo' data-testid='search' />
        </label>
        <button type='submit' name='submit' className='btn btn-neutral join-item' data-testid='button'>
          <SearchIcon className='mx-2 size-5' />
        </button>
      </form>
      {topics?.length > 0 && (
        <div className='flex w-full items-center justify-center gap-2' data-testid='topics'>
          {topics.map((topic) => (
            <button
              type='button'
              className='btn btn-outline btn-sm btn-primary'
              key={topic}
              onClick={() => router.push(`/?t=${topic}`)}
              data-testid='topic-button'
            >
              {topic}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
