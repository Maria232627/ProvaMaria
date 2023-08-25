import * as S from "./styles"
export function Header() {
  return (
    <S.Header>
      <S.NavBar>
        <h3>Tecnologia que muda o mundo</h3>
        <ul>
          <li>
            <a href="/">Tópicos</a>
          </li>
          <li>
            <a href="/list">Descrição</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}