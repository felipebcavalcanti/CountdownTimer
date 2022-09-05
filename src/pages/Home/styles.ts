import styled from "styled-components";


export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
        
    }


`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--gray-100);
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap; // quando diminuir a tela ele quebra as linhas e assim nao cria uma barra de rolagem



`;

export const CountDownContainer = styled.div`
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: var(--gray-100);

    display: flex;
    gap: 1rem;

    span {
        background-color: var(--gray-700);
        padding: 2rem 1rem;
        border-radius: 8px;

    }

`;

export const Separator = styled.div`
    padding: 2rem 0;
    color: var(--green-500);
    width: 4rem;

    overflow: hidden;
    display: flex;
    justify-content: center;

`;

export const StartCountdownButton = styled.button`
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    background: var(--green-500);
    color: var(--gray-100);

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: var(--green-700);
    }

`;

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid var(--gray-500);
    
    font-size: 1.125rem;
    padding: 0 0.5rem;
    font-weight: bold;
    color: var(--gray-100);

    &:focus {
        box-shadow: none;
        border-color: var(--green-500);
    }

    &::placeholder {
        color: var(--gray-500);
    }
`;

export const TaskInput = styled(BaseInput)`
   flex: 1;

   &::-webkit-calendar-picker-indicator {
    display: none !important;
   }
`;

export const MinuteAmountInput = styled(BaseInput)`
    width: 4rem;

`;