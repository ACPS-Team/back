export interface GetAllQuizzes {
  id: string
  name: string
  module: {
    id: string
    name: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface GetQuiz {
  id: string
  name: string
  module: {
    id: string
    name: string
  }
  questions: {
    id: string
    title: string
    options: string[]
  }[]
  createdAt: Date
  updatedAt: Date
}

export interface GetQuizResults {
  id: string
  score: number
  quiz: {
    id: string
    name: string
    module: {
      id: string
      name: string
    }
  }
  createdAt: Date
}
