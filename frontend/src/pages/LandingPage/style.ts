import styled, { keyframes } from 'styled-components';

// 公共样式
import { container } from '@/assets/style';
// 图片资源
import { LandingBackground } from '@/assets/image';

export const LandingPageStyled = styled.div`
	height: 100%;
`;

export const IntroductionSectionStyled = styled.section<{
	vh: number | null;
}>`
	${container()}
	width: 100%;
	height: ${({ vh }) => (vh ? `${100 * vh}px` : '100vh')};
	padding-top: calc(60px + 32px + 16px) !important;
	padding-bottom: 16px !important;

	background-image: url(${LandingBackground});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
	background-clip: border-box;
	backdrop-filter: blur(0.5px);
	filter: blur(0.5px);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.title,
	.sentence {
		color: #fff;
		text-shadow: 0 0 4px #000;

		width: 50%;
		align-self: flex-start;

		@media screen and (max-width: 850px) {
			width: 75%;
		}
		@media screen and (max-width: 600px) {
			width: 100%;
		}
	}

	@media screen and (max-width: 600px) {
		.title {
			font-size: 32px;
		}
	}

	.down-icon {
		margin-top: auto;
		cursor: pointer;

		${({ theme }) => theme.shape.iconAppearance.apply}
	}
`;
