export interface GetQuizzById {
  id: string
  title: string
  description: string
  questions: {
    id: string
    question: string
  }[]
}
