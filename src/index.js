import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

const Lista = styled.div`
	width: 100px;
	height: 100px;
	background: #FFF;

	img {
		width: 50px;
    heigth: 50px;
	}
`;

