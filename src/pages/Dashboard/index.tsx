import React, { useCallback } from 'react';
import HeaderComponet from '../../components/header';
import {Container,Content,Card} from './styles';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa'
import {CgDetailsMore} from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const dataFakes = [
    {
        id: 1,
        name: "Nino",
        imageUrl: "https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
    },
    {
        id: 2,
        name: "João",
        imageUrl: "https://t2.ea.ltmcdn.com/pt/images/3/7/7/img_nomes_para_cachorros_labradores_20773_600_square.jpg",
    },
    {
        id: 3,
        name: "Alfredo",
        imageUrl: "https://s2.glbimg.com/eQkhAB2FrlFSMj_Jbkw024ueqao=/e.glbimg.com/og/ed/f/original/2019/01/19/50898568_10157219683273254_5268539131058716672_o.jpg",
    },
    {
        id: 4,
        name: "Leonardo",
        imageUrl: "https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
    },
    {
        id: 5,
        name: "Sushi",
        imageUrl: "https://catracalivre.com.br/wp-content/thumbnails/UpClSTyK1Ytj2hEejDy-ZXclLKI=/wp-content/uploads/2020/03/brown-and-white-dog-4633734-1920-910x607.jpg",
    },
    {
        id: 6,
        name: "Zebra",
        imageUrl: "https://www.drogavet.com.br/wp-content/uploads/2019/08/articulacoes-gatos-site-agosto-2019.png",
    },
    {
        id: 7,
        name: "Nikita",
        imageUrl: "https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg",
    },
    {
        id: 8,
        name: "Mel",
        imageUrl: "https://exame.com/wp-content/uploads/2020/03/gettyimages-1212711501-e1585683360473.jpg",
    },
    {
        id: 9,
        name: "Zebra",
        imageUrl: "https://www.drogavet.com.br/wp-content/uploads/2019/08/articulacoes-gatos-site-agosto-2019.png",
    },
    {
        id: 10,
        name: "Nikita",
        imageUrl: "https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg",
    },
    {
        id: 11,
        name: "Mel",
        imageUrl: "https://exame.com/wp-content/uploads/2020/03/gettyimages-1212711501-e1585683360473.jpg",
    },
];

interface IItems {
    id: number;
    name: string;
    imageUrl: string;
}

const Dashboard: React.FC = () => {
    const history = useHistory();
    const handleGoToDatails = useCallback((item:IItems) => {
        history.push(`/details/${item.id}`);
    },[history]);
    
    return(
        <Container>
            <HeaderComponet />
            <main>
                <Content>
                    {dataFakes.map(item => (
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