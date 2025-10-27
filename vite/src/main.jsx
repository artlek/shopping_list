import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@mui/material';
import { Theme } from './components/Theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<HashRouter>
            <GlobalStyles styles={{ html: { fontSize: '16px' } }} />
            <ThemeProvider theme={Theme}>
				<App />
			 </ThemeProvider>
		</HashRouter>
	</React.StrictMode>
);