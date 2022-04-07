import styled from "styled-components";

export const BackGroundTabela = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Tabela = styled.table`
  width: 95%;
  text-align: center;
  border-spacing: 0px;
  background-color: #fff !important;
  border-radius: 8px;
  border: 1.5px solid #dfe0eb;
`;

export const TrTabela = styled.tr`
  &:nth-child(even) {
    background-color: #eeeeee;
  }
`;

export const TdTabela = styled.td`
  border-bottom: 1.5px solid #dfe0eb;
  color: #777777;
  font-size: 18px;
  height: 90px;
`;

export const TheadTabela = styled.thead`
  height: 90px;
  background-color: #eeeeee;
  font-size: 24px;
  color: #a8a8a8;
`;

export const TitleUsers = styled.h1`
  align-self: start;
  color: #808080;

  margin: 36px 0px 56px 40px;
`;
