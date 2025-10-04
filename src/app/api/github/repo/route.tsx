import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { q, sort, order, per_page, page } = await req.json()

    if (!q) return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })

    const url = `https://api.github.com/search/repositories?q=${q}${sort && `&sort=${sort}&order=${order} || 'desc'`}&per_page=${per_page || 30}&page=${page || 1}`
    const result = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      cache: 'force-cache'
    })

    const link = result.headers.get('link')
    const links: Record<string, number> = {}

    if (link) {
      const parts = link.split(',')
      for (const part of parts) {
        const match = part.match(/<([^>]+)>;\s*rel="([^"]+)"/)
        if (match) {
          const [, url, rel] = match
          const pageMatch = url.match(/[?&]page=(\d+)/)
          if (pageMatch) {
            links[rel as keyof typeof links] = parseInt(pageMatch[1], 10)
          }
        }
      }
    }

    if (!result.ok) {
      return NextResponse.json({ error: result }, { status: result.status })
    }

    return NextResponse.json({ data: await result.json(), links: links }, { status: 200 })
    // biome-ignore lint/suspicious/noExplicitAny: try-catch
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode || 500 })
  }
}
