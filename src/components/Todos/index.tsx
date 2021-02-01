import React, { useState } from 'react';
import { Text } from 'react-native';

import {
  ListCardContainer,
  TodoColumn,
  TodoRow,
  TodoHeader,
  TodoName,
  TagRow,
  TagView,
  TagText,
  TodoDifficulty,
  TodoDescription,
  Card,
} from './styles';

interface PropsList {
  nameTodo: string;
  difficulty: string;
  description: string;
  tags: string[];
}

const Todos: React.FC<PropsList> = ({
  nameTodo,
  difficulty,
  description,
  tags,
}) => {
  const [tag, setTag] = useState(tags)

  return (
    <Card>
      <ListCardContainer>
        <TodoColumn>
          <TodoRow>
            <TodoHeader>
              <TodoName numberOfLines={1}>{nameTodo}</TodoName>
              <TodoDifficulty numberOfLines={1}>{difficulty}</TodoDifficulty>
            </TodoHeader>

            <TodoDescription numberOfLines={1}>{description}</TodoDescription>
          </TodoRow>
          <TagRow>
            {tag.map(item => (
              <TagView key={item}>
                <TagText>{item}</TagText>
              </TagView>
            ))}
          </TagRow>
        </TodoColumn>
      </ListCardContainer>
    </Card>
  );
};

export default Todos;
