import styled from "styled-components";


export const Section = styled.section`
    width:100%;
    height:100vh;
    display:flex;
`

export const Box = styled.div`
    position:relative;
    overflow:hidden;
    background: ${(props) => (props.dark ? "#1d1d1d" : "#262626")};
    flex:1;
    /* padding:${(props) => (props.dark ? "0 1rem" : "")}; */
`

export const TextBox = styled.div`
    padding:6.9rem;
    position:relative;
    height:80%;
    display: ${(props) => (props.flex ? "flex" : "0")};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;


    h1{
        color:#fff;
        font-size:3rem;
        font-weight:500;
        display:inline
    }
    span{
        color:#ec1763;
        font-size:1.5rem;
        font-weight:500;
    }
    p{
        color:#fff;
        font-weight:300;
        line-height:1.5;
        padding:1.7rem 0;
    }
`

export const Button = styled.button`
    background:#ec1763;
    font-size:1rem;
    font-weight:500;
    font-family:inherit;
    padding:0.9rem 2rem;
    border-radius:8px;
    cursor: pointer;
    color:#fff;
    border:0;
    outline:none;
`

export const BikeF = styled.img`
    position:absolute;
    bottom:0;
    left:0;
    width:250px;
    z-index:6;
`

export const Mask = styled.div`
    position:absolute;
    bottom:-70px;
    left:-20px;
    padding:220px;
    background:#ec1763;
    transform:rotate(30deg);
    filter:blur(125px);
`

export const BikeB = styled.img`
    width:350px;
    z-index:6;
    position:absolute;
    left:-50px;
    top:50%;
    transform:translateY(-37%);
`

export const Rate = styled.div`
    color:#fff;
    font-weight:500;
    font-size:13px;
    background:#ec1763;
    padding:.3rem 1.2rem;
    border-radius:6px;

    img{
        width:1.3rem;
        margin-right:2px;
    }
`

export const Info = styled.div`
    display:flex;
    color:#fff;
    gap: 1em;

    h2{
        font-size:1rem;
        font-weight:500;
    }

    h3{
        font-weight:200;
        font-size:.7rem;
    }
`