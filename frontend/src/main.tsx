// React
import { StrictMode } from 'react';
import { render } from 'react-dom';

// 组件
import { SafeArea } from './components';
import App from './App';

render(
	<StrictMode>
		<SafeArea>
			<App />
		</SafeArea>
	</StrictMode>,
	document.getElementById('root'),
);
