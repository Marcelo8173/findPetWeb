import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh; 
`;

export const Background = styled.div`
    border: 1px solid transparent;
    max-width: 100vw;
    margin: 0 50px;
    max-height: 400px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        background-size: cover;
    }
`;

export const HeaderProfile = styled.div`
    position: relative;
    top: -50px;
    display: flex;
    margin-left: 150px;
    align-items: center;
    section{
        label{
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: 1px solid transparent;
            .change-image{
                position: absolute;
                top: 80%;
                left: 110px;
                input{
                    display: none;
                }
            }
        }
    }

    img{
        width: 250px;
        height: auto;
        border: 6px solid #FFFF;
        border-radius: 50%;
        margin-right: 35px;
        transition: all 0.2s;
        &:hover{
            filter: brightness(50%);
        }
    }
    div{
        h1{
            font-family: 'Roboto Slab';
            color: #575757;
        }
        p{
            font-family: 'Roboto Slab';
            color: #575757;
            font-size: 18px;
        }
        .hashtag{
            margin-top: 12px;
            span{
                background: #B9E0EB;
                margin-left: 5px;
                color: #757575;
                font-family: 'Roboto Slab';
                padding: 5px 8px;
            }
        }
    }
`;