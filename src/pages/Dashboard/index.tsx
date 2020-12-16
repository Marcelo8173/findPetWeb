import React, { useCallback, useEffect, useState } from 'react';
import HeaderComponet from '../../components/header';
import {Container,Content,Card} from './styles';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa'
import {CgDetailsMore} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

interface ISkills {
    id: number,
    description: string;
}

export interface IItems {
    id: string;
    name: string;
    imageUrl: string;
    skills: ISkills[];
}

const Dashboard: React.FC = () => {
    const history = useHistory();
    const [items,setItems] = useState<IItems[]>([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        })
    },[]);
    
    const handleGoToDatails = useCallback((item:IItems) => {
        history.push(`/details/${item.id}`);
    },[history]);

    return(
        <Container>
            <HeaderComponet />
            <main>
                <Content>
                    {items.map(item => (
                        <Card key={item.id}>
                            <figure>
                                <section>
                                    <div className="options">
                                        <div>
                                            <button>
                                                <AiOutlineHeart />
                                            </button>
                                            <button>
                                                <FaCommentAlt />
                                            </button>
                                            <p>{item.name}</p>
                                        </div>
                                        <div>
                                            <button onClick={() => handleGoToDatails(item)} className="datails">
                                                Detalhes
                                                <CgDetailsMore />
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <img src={item.imageUrl} alt={item.name}/>
                            </figure>
                        </Card>
                    ))}
                </Content>
            </main>
        </Container>
    )
}

export default Dashboard;