export interface NewsType {
  id: number,
  title: string,
  link: string,
  date: string,
  autor: string,
  comments: CommentType[]
}

export interface CommentType {
  id: number,
  date: string,
  text: string,
  autor: string,
  childIds: number[],
  childs: CommentType[]
}

export interface QueryData {
  by: string,
  descendants: number,
  id: number,
  kids: number[],
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}