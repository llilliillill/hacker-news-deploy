export interface NewsType {
  id: number,
  date: string,
  title: string,
  rating: number,
  autor: string
}

export interface QueryData {
  id: number,
  by: string,
  descendants: number,
  kids: number[],
  score: number,
  text: string,
  time: number,
  title: string,
  type: string
}