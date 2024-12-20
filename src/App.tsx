import { Form } from './components/Form'
import { Header } from './components/Heard'
import { RepoList } from './components/RepoList'
import { HttpClientImpl } from './infra/impl/HttpClientImpl'
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

      <Form
        userName={userName}
        handleChangeUserName={handleChangeUserName}
        handleSearchByUserName={handleSearchByUserName}
      />

      <RepoList repos={repos} onLoading={loading} />
    </>
  )
}
