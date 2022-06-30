// React
import React, { useState } from 'react';

// 组件
import { Avatar, List, Space, Typography, PageHeader, Button } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { CreateArticleModal } from '@/components';
// 样式组件
import { ArticlePageStyled, ArticleListStyled } from './style';

const data = Array.from({ length: 23 }).map((_, i) => ({
	title: `ant design part ${i}`,
	avatar: 'https://joeschmoe.io/api/v1/random',
	content:
		'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

export default function ArticlePage() {
	const [createArticleModalVisible, setCreateArticleModalVisible] =
		useState(false);

	return (
		<ArticlePageStyled>
			<ArticleListStyled>
				<PageHeader
					style={{ padding: '16px 0' }}
					onBack={() => window.history.back()}
					title="Lorem"
					subTitle="Lorem ipsum dolor sit amet."
					extra={[
						<Button
							key="add-aritlce-btn"
							type="primary"
							onClick={() => setCreateArticleModalVisible(true)}>
							Создать документация
						</Button>,
					]}
				/>
				<CreateArticleModal
					visible={createArticleModalVisible}
					onCancel={() => setCreateArticleModalVisible(false)}
				/>

				<List
					bordered
					itemLayout="vertical"
					size="large"
					dataSource={data}
					renderItem={item => (
						<List.Item
							key={item.title}
							actions={[
								<IconText
									icon={StarOutlined}
									text="156"
									key="list-vertical-star-o"
								/>,
								<IconText
									icon={LikeOutlined}
									text="156"
									key="list-vertical-like-o"
								/>,
								<IconText
									icon={MessageOutlined}
									text="2"
									key="list-vertical-message"
								/>,
							]}
							extra={
								<img
									width={272}
									alt="logo"
									src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
								/>
							}>
							<List.Item.Meta
								avatar={<Avatar src={item.avatar} />}
								title={<Typography.Text editable>{item.title}</Typography.Text>}
							/>
							<Typography.Paragraph editable>
								{item.content}
							</Typography.Paragraph>
						</List.Item>
					)}
				/>
			</ArticleListStyled>
		</ArticlePageStyled>
	);
}
