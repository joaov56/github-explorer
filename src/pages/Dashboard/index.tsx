import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/61507139?s=460&u=49181336ad2c4aeb1eb4057b77e32b7cf2ad15c6&v=4" alt="foto" />
        <div>
          <strong>joaov56/happy-rocketseat</strong>
          <p>
            An application developed during Next Level Week 3 using React,
            React native and NodeJS

          </p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/61507139?s=460&u=49181336ad2c4aeb1eb4057b77e32b7cf2ad15c6&v=4" alt="foto" />
        <div>
          <strong>joaov56/happy-rocketseat</strong>
          <p>
            An application developed during Next Level Week 3 using React,
            React native and NodeJS

          </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
