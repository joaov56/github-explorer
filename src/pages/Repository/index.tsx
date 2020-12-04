import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

const Repository: React.FC = () => (
  <>
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <header>
        <img src="https://avatars2.githubusercontent.com/u/61507139?v=4" alt="profile" />
        <div>
          <strong>joaov56/happy-rocketseat</strong>
          <p>descrição do repositório</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1808</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>67</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
      <Link to="ok">
        <div>
          <strong>as</strong>
          <p>as</p>
        </div>
        <FiChevronRight size={20} />
      </Link>
    </Issues>
  </>
);

export default Repository;
