import React, { useEffect, useState } from 'react';
import HeaderComponet from '../../components/header';
import {useParams} from 'react-router-dom';
import {Container,ContentContainer,ComentsContainer,ComentsContain} from './style';
import {IoMdAddCircle} from 'react-icons/io';
import {RiWhatsappFill} from 'react-icons/ri';
import {GiTalk} from 'react-icons/gi';
import api from '../../services/api';
import { IItems } from '../Dashboard';

interface IParams{
    id?: string | undefined;
}

const Details: React.FC = () => {
    const params = useParams<IParams>();
    const [items,setItems] = useState<IItems>({} as IItems);
        
    useEffect(() => {
        api.get(`items/${params.id}`).then(response => {
            setItems(response.data);
        })
    },[params.id]);

    return(
        <Container>
            <HeaderComponet />
            <h1>{items.name}</h1>
            <ContentContainer>
                <img src={items.imageUrl} alt={items.name}/>
                <aside>
                    <h2>Descrição</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Reiciendis mollitia enim iste ratione, voluptatibus alias 
                        doloremque, explicabo aperiam cumque voluptas vero unde aliquam 
                        numquam ea, illo quia quidem temporibus voluptate.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Reiciendis mollitia enim iste ratione, voluptatibus alias 
                        doloremque, explicabo aperiam cumque voluptas vero unde aliquam 
                        numquam ea, illo quia quidem temporibus voluptate.</p>
                    <div className="buttons">
                        <button>
                            <IoMdAddCircle size={20}/>
                            Adicionar a minha lista
                        </button>
                        <button>
                            <RiWhatsappFill size={20}/>
                            Entrar em contato
                            </button>
                    </div>
                </aside>
            </ContentContainer>
            <ComentsContainer>
                <div>
                    <GiTalk size={40}/> 
                    <input placeholder="Deixe um comentário fofinho..." type="text"/>
                </div>
            </ComentsContainer>
            <ComentsContain>
                <section>
                    <img src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg" alt=""/>
                    <p>Que fofo</p>
                </section>
                <section>
                    <img src="https://avatars1.githubusercontent.com/u/50594445?s=88&u=16dac43ef18932d9fe3d30b7e19f76bb9c0d170c&v=4" alt=""/>
                    <p>Quantos anos?</p>
                </section>
            </ComentsContain>
        </Container>
    );
}

export default Details;