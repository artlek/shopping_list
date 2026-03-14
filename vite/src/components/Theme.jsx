import { createTheme } from '@mui/material/styles';

export function Theme() {
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#07699e',
                light: '#33a0db',
                dark: '#153b50',
            },
            secondary: {
                main: '#a7a7a7',
                light: '#dddddd',
                dark: '#383838',
            },
            background: {
                default: '#f8f8f8',
                paper: '#eeeeee',
                none: 'white'
            },
            text: {
                primary: '#505050',
                disabled: '#a7a7a7',
                secondary: '#424242',
            },
        },
        typography: {
            fontFamily: 'InterDisplay',
            h1: {
                fontSize: '1.4rem',
                color: '#505050',
                fontWeight: 700,
            },
            h2: {
                fontSize: '1.3rem',
            },
            h3: {
                fontSize: '1.2rem',
            },
            h4: {
                fontSize: '1.1rem',
            },
            overline: {
                fontSize: '1.1rem',
                color: '#164c69',
                fontWeight: 600,
            },
            subtitle1: {
                lineHeight: '1.3rem',
                fontSize: '1rem', 
                color: '#1d1d1d',
                fontWeight: 600,
            },
            subtitle2: {
                color: '#919191',
                lineHeight: '1.3rem',
                fontSize: '0.8rem',
                fontWeight: 500,
            },
            button: {
                color: '#ffffff',
                fontWeight: 600,
            },
            caption: {
                fontSize: '0.8rem',
            },
            p: {
                lineHeight: 1.75,
                fontWeight: 800,
            }
        },
    });
    return(
        theme
    );
}