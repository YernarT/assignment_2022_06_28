// 类型
import type { ModalProps } from 'antd';

// 组件
import { Form, Input, Button, Space } from 'antd';
// 样式组件
import { CreateArticleModalStyled } from './style';

export default function CreateArticleModal(props: ModalProps) {
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		console.log(values);
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
