// React
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// 组件
import Header from './Header';
// 样式组件
import { CommonLayoutStyled } from './style';

// 懒加载页面
const LandingPage = lazy(() => import('@/pages/LandingPage'));
const ArticlePage = lazy(() => import('@/pages/ArticlePage'));

export default function CommonLayout() {
	return (
		<BrowserRouter>
			<CommonLayoutStyled>
				<Header />

				<Suspense fallback={<div>Loading...</div>}>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/articles" component={ArticlePage} />
				</Suspense>
			</CommonLayoutStyled>
		</BrowserRouter>
	);
}
