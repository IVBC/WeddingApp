import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Background from '~/components/Background';

import {
  TitleHeader,
  TitleMenu,
  MenuContainer,
  Wrapper,
  MenuIcon,
  MenuList,
  DishContainer,
  DishTitle,
  DishDescription,
} from './styles';

const Menu = () => {
  const [dishs, setDishs] = useState([
    {
      title: 'Entrada',
      description:
        'Coxinha de Frango, Bolinha de Queijo, Risole de queijo e presunto, Risole de Carne, Romeu & Julieta, Boliviano picante, Pastelzinho, Empada, Bolinha de Camarão',
    },
    {
      title: 'Pratos Quentes',
      description:
        'Filé Mignon ao Molho Madeira, Bacalhau gratinado à Gomes de Sá, Lasanha de Carne ao Molho Bolonhesa',
    },
    {
      title: 'Acompanhamentos',
      description:
        'Arroz Branco, Farofa, Salada Tradicional, Maionese/Salpicão',
    },
    {
      title: 'Doces Tradicionais e Finos',
      description:
        'Brigadeiro Tradicional, Olho de Sogra, Doce de Coco, Doce de Ameixa, Casadinho, Uvas encapadas, Mini-Pudins de Leite, Tacinhas Individuais de Chocolate Recheada',
    },
    {
      title: 'Sobremesas',
      description: 'Torta Sonho de Valsa e Tarça da Felicidade',
    },
    {
      title: 'Bebidas',
      description:
        'Suco de Cupuaçu, Suco de Maracujá, Coca-Cola, Coca-Cola Zero, Fanta Laranja, Guaraná Baré, Guaraná Real, Guaraná Tuchaua, Água Mineral sem Gás',
    },
  ]);
  return (
    <Background>
      <TitleHeader>
        <TitleMenu>Menu</TitleMenu>
      </TitleHeader>
      <Wrapper>
        <MenuContainer
          // start={{ x: 0.0, y: 0.25 }}
          // end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.7, 1]}
          colors={[
            '#F2F5FF',
            'rgba(255, 255, 255, 1)',
            'rgba(242, 245, 255, 0.0001)',
          ]}
        >
          <MenuList
            data={dishs}
            keyExtractor={(dish) => String(dish.title)}
            // onEndReached={loadGuests}
            // ListFooterComponent={moreLoading}
            // ListEmptyComponent={renderEmpty}
            renderItem={({ item: dish }) => (
              <DishContainer>
                <DishTitle>{dish.title}</DishTitle>
                <DishDescription>{dish.description}</DishDescription>
              </DishContainer>
            )}
          />
          {/* <MenuIcon name="car" /> */}
        </MenuContainer>
        <MenuIcon name="bookmark" />
      </Wrapper>
    </Background>
  );
};

export default Menu;
