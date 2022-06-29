// React
import { memo, useRef } from 'react';
import { useHistory } from 'react-router-dom';

// 业务库
import { useBoolean, useClickAway } from 'ahooks';

// 组件
import { Typography } from 'antd';
import { CompassOutlined, MenuOutlined } from '@ant-design/icons';
// 样式组件
import { HeaderStyled } from './style';

export default memo(function Header() {
	const history = useHistory();

	// navigator switch state
	const [
		navPanelVisible,
		{ toggle: toggleNavPanelVisible, setFalse: closeNavPael },
	] = useBoolean(false);

	// navigator paenel ref
	const navPanelRef = useRef<HTMLDivElement>(null);
	useClickAway(closeNavPael, navPanelRef);

	return (
		<HeaderStyled navPanelVisible={navPanelVisible}>
			<div className="brand">
				<Typography.Title level={2} className="brand-name">
					Имя бренда
				</Typography.Title>
				<CompassOutlined className="brand-image" />
			</div>

			<nav className="navigator">
				<Typography.Link onClick={() => history.push('/')}>
					Главный страница
				</Typography.Link>

				<Typography.Link onClick={() => history.push('/articles')}>
					Документаций
				</Typography.Link>
			</nav>

			<div className="navigator-panel" ref={navPanelRef}>
				<nav className="navigator2">
					<Typography.Link onClick={() => history.push('/')}>
						Главный страница
					</Typography.Link>

					<Typography.Link onClick={() => history.push('/articles')}>
						Документаций
					</Typography.Link>
				</nav>
			</div>

			<MenuOutlined
				className="navigator-switch"
				onClick={e => {
					e.stopPropagation();
					toggleNavPanelVisible();
				}}
			/>
		</HeaderStyled>
	);
});
