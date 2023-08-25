import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Descricao() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          mensagem={item.mensagem}
        />
      ))}
    </S.Section>
  )
}