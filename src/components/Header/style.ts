import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            height: 3rem;
            width: 3rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: var(--gray-100);

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid var(--green-500);
            }

            &.active {
                color: var(--green-500);
            }

        }



    }
`;