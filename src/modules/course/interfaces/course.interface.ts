export interface CreateCourse {
  id: string
  name: string
  description: string | null
  finished_at: Date | null
  createdAt: Date
  updatedAt: Date
  module: {
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
  }[]
}
