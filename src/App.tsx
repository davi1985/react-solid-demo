import { Header } from './componentes/Header'
import { RepoList } from './componentes/RepoList'
import { SearchReposForm } from './componentes/SearchReposForm'
import { HttpClientImpl } from './infra/httpClient/impl/httpClientImpl'
import { useApp } from './useApp'

export const App = () => {
  const {
    repos,
    loading,
    userName,
    handleChangeUserName,
    handleSearchByUserName,
  } = useApp({
    httpClient: HttpClientImpl.create(),
  })

  return (
    <>
      <Header />

      <SearchReposForm
        onChange={handleChangeUserName}
        userName={userName}
        onHandleSearchByUserName={handleSearchByUserName}
      />

      <RepoList repos={repos} onLoading={loading} />
    </>
  )
}
