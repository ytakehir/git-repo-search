import { useRouter } from 'next/navigation'

export const useHome = () => {
  const router = useRouter()

  const handleSearch = async (q: string) => {
    router.push(`/result?q=${q}&page=1`)
  }

  return {
    handleSearch
  }
}
