import React from 'react';
import HeaderComponet from '../../components/header';
import {Container,ContentContainer,ComentsContainer,ComentsContain} from './style';
import {IoMdAddCircle} from 'react-icons/io';
import {RiWhatsappFill} from 'react-icons/ri';
import {GiTalk} from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Details: React.FC = () => {
    return(
        <Container>
            <HeaderComponet />
            <h1>Nino</h1>
            <ContentContainer>
                <img src="https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg" alt=""/>
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
                    <img src="https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg" alt=""/>
                    <p>Quantos anos?</p>
                </section>
            </ComentsContain>
        </Container>
    );
}

export default Details;