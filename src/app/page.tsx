'use server'

import { randomInt } from 'node:crypto'
import { headers } from 'next/headers'
import { Home } from '@/components/page/home'

export default async function HomePage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const t = (await searchParams).t
  const origin = (await headers()).get('origin') ?? process.env.NEXT_PUBLIC_BASE_URL ?? ''
  const result = await fetch(`${origin}/api/github/popular-topics`, {
    method: 'GET'
  })
  const topics: string[] = await result.json()
  const topic = t || topics[randomInt(topics.length - 1)]

  const repo = await fetch(`${origin}/api/github/topics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: topic
    })
  })

  return <Home repo={await repo.json()} topics={topics} currentTopic={Array.isArray(topic) ? topic[0] : topic} />
}
