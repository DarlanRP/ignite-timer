
import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["gray-200"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`

export const BaseCountdownButton = styled.button`
    color: ${(props) => props.theme["gray-100"]};
    width: 100%;
    border: 0;
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;

    
`

export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${(props) => props.theme["green-500"]};

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background: ${(props) => props.theme["green-700"]};
    }

`

export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${(props) => props.theme["red-500"]};

    &:hover{
        background: ${(props) => props.theme["red-700"]}; 
    }

`