import * as S from "./styles";
export interface ICard {

  mensagem: string
}
export const Card = ({ mensagem }: ICard) => {
  return (
    <S.Aside>
      <p>Mensagem: {mensagem}</p>
    </S.Aside>
  );
};
