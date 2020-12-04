import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/dashboard">
                    <FiChevronsLeft size={16}/>
                        Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="#" alt="Enatix" />
                    <div>
                        <strong>crazoid/conceitos-nodejs</strong>
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
                        <span>Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="asdasd">
                    <div>
                        <strong>repository.full_name</strong>
                        <p>repository.description</p>
                    </div>
                <FiChevronRight size={20}/>
            </Link>
            </Issues>
        </>
    );
 };

 export default Repository;