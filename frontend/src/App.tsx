// 组件
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseLine, CommonLayout } from '@/components';

// 其他资源
import { theme } from '@/assets/theme';
import ruRU from 'antd/lib/locale/ru_RU';

const App = () => (
	<StyledThemeProvider theme={theme}>
		<AntdConfigProvider locale={ruRU}>
			<CssBaseLine />
			<CommonLayout />
		</AntdConfigProvider>
	</StyledThemeProvider>
);

export default App;
