import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Brand = styled.h1`
    margin-top: 1rem;
    margin-bottom: 3rem;

    .tag {
        font-size: 1rem;
    }
`

export const Questions = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const Question = styled.li`
    .title {
        font-size: 1.5rem;
    }
`

export const Options = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: #000;
    margin: 0;
    padding: 0;
`;

export const Option = styled.li`
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    ${props => props.selected && `
        border: 3px solid lightseagreen;
        background-color: lightblue;     
    `}
`