import { NextResponse } from 'next/server'
import { parse } from 'node-html-parser'

export async function GET() {
  try {
    const url = `https://github.com/topics`
    const result = await fetch(url, { method: 'GET', cache: 'force-cache' })
    const dom = parse(await result.text())
    const topics = dom.querySelectorAll('h2 + ul > li').map((item) => item.innerText.trim())

    if (!result.ok) {
      return NextResponse.json({ error: result }, { status: result.status })
    }

    return NextResponse.json(topics, { status: 200 })
    // biome-ignore lint/suspicious/noExplicitAny: try-catch
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode || 500 })
  }
}
