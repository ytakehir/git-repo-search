import { useRouter, useSearchParams } from 'next/navigation'

export const useResult = () => {
  const router = useRouter()
  const params = useSearchParams()
  const q = params.get('q')
  const page = params.get('page')

  const handleSearch = async (q: string) => {
    router.push(`/result?q=${q}&page=1`)
  }

  const handlePage = async (page?: number) => {
    if (!page) return
    router.push(`/result?q=${q}&page=${page}`)
  }

  return {
    q,
    page,
    handleSearch,
    handlePage
  }
}
