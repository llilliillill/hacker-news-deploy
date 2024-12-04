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
  id: number,
  kids: number[],
  parent: number,
  text: string,
  time: number,
  type: string
}