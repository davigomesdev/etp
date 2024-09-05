//style imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';

//style imports
import GlobalStyle from './presentation/styles/global.style.ts';

//component imports
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
);
