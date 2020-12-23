import React, { useCallback, useEffect, useState } from 'react';
import HeaderComponet from '../../components/header';
import {AiOutlineHeart,AiOutlineClose} from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa'
import {CgDetailsMore} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useFollow } from '../../hooks/Following';
import Modal from '../../components/modal';
import {Container,Content,Card,ModalContent} from './styles';


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
    const { addToFollow } = useFollow();
    const [items,setItems] = useState<IItems[]>([]);
    const [isOpenToSuspend, setIsOpenToSuspend] = useState(false);

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
            <Modal isOpen={isOpenToSuspend}>
                <div className="header-modal">
                    <h1>Adicionar comentário</h1>
                    <button className="close-modal" onClick={() => setIsOpenToSuspend(!isOpenToSuspend)}>
                        <AiOutlineClose />
                    </button>
                </div>
                <ModalContent>
                    <div>
                        <input type="text" name="" id=""/>
                        <button>Enviar</button>
                    </div>
                </ModalContent>
            </Modal>
            <HeaderComponet />
            <main>
                <Content>
                    {items.map(item => (
                        <Card key={item.id}>
                            <figure>
                                <section>
                                    <div className="options">
                                        <div>
                                            <button onClick={() => addToFollow(item)} > 
                                                <AiOutlineHeart />
                                            </button>
                                            <button onClick={() => setIsOpenToSuspend(!isOpenToSuspend)}>
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