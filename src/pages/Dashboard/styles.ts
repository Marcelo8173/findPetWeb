import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    main{
        margin: 0 30px;
    }
`;

export const Content = styled.div`
    column-count: 3;
    column-gap: 20px;
`;

export const Card = styled.div`
    cursor: pointer;
    position: relative;
    
    figure{
        margin: 0;
        display: flex;
        margin-bottom: 20px;
        break-inside: avoid;
        section{
            position: absolute;
            width: 100%;
            .options{
                display: flex;
                justify-content: space-between; 
                div{
                    p{
                        color: #FFFF;
                        font-weight: 700;
                        font-family: 'Roboto Slab';
                        margin-left: 15px;
                    }
                }
                button{
                    border:1px solid transparent;
                    padding: 5px;
                    margin: 5px;
                    background: transparent;
                    color: #FFFF;
                    font-weight: 700;
                    font-family: 'Roboto Slab';
                    transition: all 0.2s;
                    svg{
                        color: rgb(255, 189, 29);
                        font-size: 25px;
                    }
                    &:hover{
                        opacity: 0.8;
                    }
                }
                .datails{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg{
                        margin-left: 5px;
                    }
                }
            }
        }
        img{
            width: 100%;
            border-radius: 5px;
            filter: brightness(80%);
            z-index: -1;
        }
       
    }
`;