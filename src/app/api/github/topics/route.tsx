import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { q } = await req.json()

    if (!q) return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })

    const url = `https://api.github.com/search/repositories?q=topic:${q}&per_page=10`
    const result = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      cache: 'force-cache'
    })

    if (!result.ok) {
      return NextResponse.json({ error: result }, { status: result.status })
    }

    return NextResponse.json(await result.json(), { status: 200 })
    // biome-ignore lint/suspicious/noExplicitAny: try-catch
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode || 500 })
  }
}
