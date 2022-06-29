// React
import { useEffect, useRef } from 'react';

// 组件
import { Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// 样式组件
import {
	LandingPageStyled,
	IntroductionSectionStyled,
	CardSectionStyled,
} from './style';

// 业务库
import { useVh } from '@/hooks';

export default function LandingPage() {
	const vh = useVh();

	return (
		<LandingPageStyled>
			<IntroductionSectionStyled vh={vh}>
				<Typography.Title level={1} className="title">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</Typography.Title>
				<Typography.Paragraph className="sentence" type="secondary">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
					accusantium deserunt magni recusandae consequuntur obcaecati iure,
					totam, quae iusto, officia maiores culpa perspiciatis vitae aliquam
					eos soluta fugit assumenda nesciunt.
				</Typography.Paragraph>
				<Typography.Paragraph className="sentence" type="secondary">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
					odit eum harum illo, assumenda alias dolore, animi sed fugiat qui
					maxime placeat repudiandae pariatur perspiciatis consequatur, atque
					voluptatem obcaecati ut!
				</Typography.Paragraph>

				<DownOutlined
					className="down-icon"
					onClick={() => {
						document
							.getElementById('c-layout')
							?.scrollTo(
								0,
								document.documentElement?.clientHeight || window.innerHeight,
							);
					}}
				/>
			</IntroductionSectionStyled>

			<CardSectionStyled></CardSectionStyled>
		</LandingPageStyled>
	);
}
