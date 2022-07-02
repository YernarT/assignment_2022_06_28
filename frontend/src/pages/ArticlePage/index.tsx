// 类型
import {
	ArticleType4CreateSingle,
	ArticleType4Create,
	ArticleType4Read,
} from '@/service/api/article-api';

// React
import React, { useState } from 'react';

// 业务库
import { useRequest } from 'ahooks';
import { reqGetArticles, reqUpdateArticle } from '@/service/api/article-api';

// 组件
import { Avatar, List, Space, Typography, PageHeader, Button } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { CreateArticleModal } from '@/components';
import { ArticlePageStyled, ArticleListStyled } from './style';
// 样式组件

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

export default function ArticlePage() {
	// create article modal state
	const [createArticleModalVisible, setCreateArticleModalVisible] =
		useState(false);

	// articles state
	const [articles, setArticles] = useState<ArticleType4Read[]>([]);

	// get articles on mount
	useRequest(reqGetArticles, {
		onSuccess(articles) {
			// @ts-ignore 还不会 axios+ts 注释类型
			setArticles(articles);
		},
	});

	// create article
	const handleCreateArticle = (article: ArticleType4Read) => {
		setArticles(prevState => [...prevState, article]);
		setCreateArticleModalVisible(false);
	};

	// update article
	const { runAsync: updateArticle } = useRequest(
		(data: ArticleType4CreateSingle) => reqUpdateArticle(data),
		{
			manual: true,
		},
	);

	// handle update article
	const handleUpdateArticle = (_id: string) => {
		let article = articles.find(article => article._id === _id);

		if (article) {
			updateArticle(article);
		}
	};

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
					afterCreate={handleCreateArticle}
				/>

				<List
					bordered
					itemLayout="vertical"
					size="large"
					dataSource={articles.map(({ _id, title, content }) => ({
						_id,
						title,
						content,
						avatar: 'https://joeschmoe.io/api/v1/random',
					}))}
					renderItem={item => (
						<List.Item
							key={item._id}
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
								title={
									<Typography.Text
										editable={{
											maxLength: 20,
											onChange(value) {
												setArticles(prevState =>
													prevState.map(article => {
														if (article._id === item._id) {
															article.title = value;
														}
														return article;
													}),
												);
											},
											onEnd: () => {
												handleUpdateArticle(item._id);
											},
										}}>
										{item.title}
									</Typography.Text>
								}
							/>
							<Typography.Paragraph
								editable={{
									maxLength: 254,
									onChange(value) {
										setArticles(prevState =>
											prevState.map(article => {
												if (article._id === item._id) {
													article.content = value;
												}
												return article;
											}),
										);
									},
									onEnd: () => {
										handleUpdateArticle(item._id);
									},
								}}>
								{item.content}
							</Typography.Paragraph>
						</List.Item>
					)}
				/>
			</ArticleListStyled>
		</ArticlePageStyled>
	);
}
