import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 1em; //remove this at prod
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: none;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        letter-spacing: inherit;
    }

    ::-webkit-input-placeholder {
        color: var(--grey-600);
    }

    :-ms-input-placeholder {
        color: var(--grey-600);
    }

    ::-moz-placeholder {
        color: var(--grey-600);
    }

    ::placeholder {
        color: var(--grey-600);
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    /* For WebKit browsers (Chrome, Safari, Edge) */
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--grey-100);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--grey-300);
        /* border-radius: 10px; */
        /* border: 3px solid pink; */
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--grey-300);
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: var(--grey-300) var(--grey-100);
    }

    .form-alcmst {
        --primary-color: #0c8de9;
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);

        --grey-50: hsl(0, 0%, 98%);
        --grey-100: hsl(0, 0%, 94%);
        --grey-200: hsl(0, 0%, 88%);
        --grey-300: hsl(0, 0%, 82%);
        --grey-400: hsl(0, 0%, 75%);
        --grey-500: hsl(0, 0%, 63%);
        --grey-600: hsl(0, 0%, 50%);
        --grey-700: hsl(0, 0%, 38%);
        --grey-800: hsl(0, 0%, 25%);
        --grey-900: hsl(0, 0%, 13%);
        --grey-1000: hsl(0, 0%, 4%);

        width: 100%;
        height: 700px;

        background-color: var(--white);
        color: var(--grey-900);
        border: 1px solid var(--grey-200);
        border-radius: 6px;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        font-synthesis: none;

        overflow: hidden;

        text-rendering: optimizeSpeed;
        line-height: 1.5;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        // common styles

        & button {
            padding: .2em .8em;
            font-size: .8rem;
            background-color: var(--primary-color);
            color: var(--grey-50);
            border: 1px solid var(--primary-color);
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            & svg {
                margin-right: .4em;
                width: 15px;
                display: flex;
            }

            & svg path {
                 fill: var(--grey-100);
            }
        }
    }
`;

export default GlobalStyle;
