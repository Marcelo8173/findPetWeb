import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: #E4E0EB;
    display: flex;
    justify-content: space-between;
    div{
        
    }

`;

export const WhyAdopt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 180px;
    h1{
        color: #454545;
        font-weight: 700;
        margin-bottom: 20px;
        font-family: 'Roboto Slab';
    }
    h2{
        color: #454545;
        font-weight: 550;
        margin-bottom: 20px;
        font-family: 'Roboto Slab';
    }
    img{
        width: 450px;
        height: auto;
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 5px;
        font-family: 'Roboto Slab';
        color: #454545;
        font-size: 18px;
    }
    button{
        margin-top: 20px;
        padding: 15px;
        border-radius: 5px;
        width: 200px;
        border: 1px solid #ffbd1d;
        color: #454545;
        font-family: 'Roboto Slab';
        font-weight: 550;
        font-size: 16px;

    }
`;