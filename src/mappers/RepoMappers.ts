import { RepoResponse } from '../@types'

type Props = RepoResponse

export class RepoMappers {
  static toDomain(rawData: Props) {
    const sortedRepos = rawData.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    )

    return sortedRepos
      .slice(0, 5)
      .map(({ name, language, stargazers_count }) => ({
        name,
        language,
        stars: stargazers_count,
      }))
  }
}
