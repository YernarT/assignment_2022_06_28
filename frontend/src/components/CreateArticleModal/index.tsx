// 类型
import type { ModalProps } from 'antd';
import type {
	ArticleType4Create,
	ArticleType4Read,
} from '@/service/api/article-api';

// 业务库
import { useRequest } from 'ahooks';
import { reqCreateArticle } from '@/service/api/article-api';

// 组件
import { Form, Input, Button, Space, message as antdMessage } from 'antd';
// 样式组件
import { CreateArticleModalStyled } from './style';

interface CreateArticleModalProps extends ModalProps {
	afterCreate: (article: ArticleType4Read) => void;
}

export default function CreateArticleModal({
	afterCreate,
	...props
}: CreateArticleModalProps) {
	const [form] = Form.useForm();

	// create article
	const { runAsync: createArticle } = useRequest(
		(data: ArticleType4Create) => reqCreateArticle(data),
		{
			manual: true,
		},
	);

	const onFinish = (values: ArticleType4Create) => {
		createArticle(values).then(
			article => {
				// @ts-ignore 还不会 axios+ts 注释类型
				afterCreate(article);
			},
			err => {
				antdMessage.error(err.message);
			},
		);
	};

	const onFill = () => {
		form.setFieldsValue({
			title: 'Interview task',
			content:
				'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
		});
	};

	return (
		<CreateArticleModalStyled
			{...props}
			title="Создать документация"
			footer={null}>
			<Form
				layout="vertical"
				form={form}
				name="control-hooks"
				onFinish={onFinish}>
				<Form.Item
					name="title"
					label="Заглавие"
					rules={[{ required: true, min: 2, max: 20 }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name="content"
					label="Содержание"
					rules={[{ required: true, min: 10, max: 254 }]}>
					<Input />
				</Form.Item>

				<Form.Item>
					<Space>
						<Button htmlType="button" onClick={onFill}>
							Заполнить форму
						</Button>
						<Button type="primary" htmlType="submit">
							Подавать
						</Button>
					</Space>
				</Form.Item>
			</Form>
		</CreateArticleModalStyled>
	);
}
