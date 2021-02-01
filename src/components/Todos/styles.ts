import styled from 'styled-components/native';

export const Card = styled.View`
  border-radius: 2px;
  border-left-width: 10px;
  border-left-color: #909;
  margin: 3px;
  background-color: #fff;
  flex-direction: row;
  height: 100px;
`;

export const ListCardContainer = styled.View`
  flex: 1;
  margin-bottom: 24px;
  margin-right: 24px;
  /* width: 90%;
  height: 100px; */
`;

export const TodoColumn = styled.View`
  /* background: #909; */
  margin-left: 20px;
  flex: 1;
`;

export const TodoRow = styled.View`
  margin-top: 5px;
  /* background: #999; */
  /* height: 66px; */
`;

export const TodoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
`;

export const TodoName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const TodoDifficulty = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const TodoDescription = styled.Text`
  color: #b5b5c4;
`;

export const TodoCategory = styled.Text``;

export const TagRow = styled.View`
  margin-top: 15px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background: #e6e6e6;
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: #6e6e6e;
  font-size: 13px;
`;
