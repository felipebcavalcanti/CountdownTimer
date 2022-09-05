import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
   
   :root{
         --white: #FFFFFF;

        --gray-100: #E1E1E6;
        --gray-300: #C4C4CC;
        --gray-400: #8D8D99;
        --gray-500: #7C7C8A;
        --gray-600: #323238;
        --gray-700: #29292E;
        --gray-800: #202024;
        --gray-900: #121214;

        --green-300: #00B37E;
        --green-500: #00875F;
        --green-700: #015F43;

        --red-500: #AB222E;
        --red-700: #7A1921;

        --yellow-500: #FBA94C;


   }
   
   :focus {
        outline: 0;
        box-shadow: 0 0 0 2px var(--gray-500)
   }
   
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--gray-900);
        color: var(--gray-300);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    

`;