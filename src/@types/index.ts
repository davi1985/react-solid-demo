export type Repo = {
  name: string
  stars: number
  language: string
}

export type RepoResponse = {
  name: string
  stargazers_count: number
  language: string
}[]
