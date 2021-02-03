import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Todos from '../../components/Todos';
import api from '../../services/api';

import { ContainerScrollView, Container, Header, TextHeader } from './styles';

interface Techs {
  id: string;
  tech: string;
  difficulty: string;
  description: string;
  tags: string[];
}

const Home: React.FC = () => {
  const [techs, setTechs] = useState<Techs[]>([])

  useEffect(() => {
    api.get<Techs[]>(`list`).then(response => {
      setTechs(response.data)
    })
  }, [])

  return (
    <Container>
      <Header>
        <TextHeader>
          Technology study list
        </TextHeader>
      </Header>
      <ContainerScrollView>
        {techs.map(item => (
          <Todos
            onSwipeFromLeft={() => console.log('swiped from left!')}
            onRightPress={() => console.log('pressed right!')}
            key={item.id}
            nameTodo={item.tech}
            difficulty={item.difficulty}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </ContainerScrollView>
    </Container>
  );
};

export default Home;
