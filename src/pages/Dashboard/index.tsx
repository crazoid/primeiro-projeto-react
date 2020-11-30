import React from 'react';
import logoImg from '../../assets/github-logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Logo"/>
            
            <Title>Explore repositórios no GitHub.</Title>
            
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img 
                        src="https://avatars2.githubusercontent.com/u/3564?s=460&u=a1bc10156a5ff36db87352658aa22271f24f2887&v=4"
                        alt="Fábio Palhano"
                    />
                    <div>
                        <strong>crazoid/primeiro-projeto-react</strong>
                        <p>Para web de mobile</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
 };

 export default Dashboard;