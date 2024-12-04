import { NewsType, CommentType, QueryData } from "../types"
import { API_URL } from 'shared/config/http'
import { getDate } from 'shared/helpers/date';
import { newsModel } from "../model"
const store = newsModel()

export const getComments = async (ids: number[]) => {
  let result: CommentType[] = []
  try {
    const req = ids.map((id: number) => 
      fetch(`${ API_URL }/item/${ id }.json?print=pretty`)
    )
    const rows = await Promise.all(
      (await Promise.all(req)).map(res => res.json())
    )
    result = rows.map(comment => {
      return {
        id: comment.id,
        date: getDate(comment.time),
        text: comment.text,
        autor: comment.by,
        childIds: comment.kids,
        childs: []
      }
    })
  } catch(err) {
    console.error('Error:', err)
  }
  return result
}

export const getNewsById = async (id: number) => {
  let result: NewsType | null = null
  try {
    store.loading = true
    const res = await fetch(
      `${ API_URL }/item/${ id }.json`
    )
    const news: QueryData = await res.json()
    const comments: CommentType[] = await getComments(news.kids)
    result = {
      id: news.id,
      title: news.title,
      link: news.url,
      date: getDate(news.time),
      autor: news.by,
      comments: comments
    }
  } catch(err) {
    console.error('Error:', err)
  } finally {
    store.loading = false
  }
  return result
}