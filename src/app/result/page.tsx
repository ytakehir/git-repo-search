'use server'

import { headers } from 'next/headers'
import { Result } from '@/components/page/result'

export default async function ResultPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const q = (await searchParams).q
  const page = (await searchParams).page
  const origin = (await headers()).get('origin') ?? process.env.NEXT_PUBLIC_BASE_URL ?? ''
  const topics = await fetch(`${origin}/api/github/popular-topics`, {
    method: 'GET'
  })
  const repo = await fetch(`${origin}/api/github/repo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: q,
      sort: '',
      order: '',
      per_page: 30,
      page: page ?? 1
    })
  })

  return <Result repo={await repo.json()} topics={await topics.json()} />
}
