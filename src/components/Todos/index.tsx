import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
  onSwipeFromLeft: any;
  onRightPress: any;
}

const Todos: React.FC<PropsList> = ({
  nameTodo,
  difficulty,
  description,
  tags,
  onSwipeFromLeft,
  onRightPress
}) => {
  const [tag, setTag] = useState(tags)

  const LeftActions = useCallback(() => {
    return (
      <TouchableOpacity onPress={() => console.log('add to cart')}>
        <View>
          <Text>Add to Cart</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <Swipeable renderLeftActions={LeftActions}>
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
    </Swipeable>
  );
};

export default Todos;
