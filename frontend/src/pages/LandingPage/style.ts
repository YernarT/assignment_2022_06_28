import styled from 'styled-components';

// 高阶组件
import { Layout } from 'antd';
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
	box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.8),
		0 9px 28px 0px rgba(0, 0, 0, 0.5), 0 12px 48px 16px rgba(0, 0, 0, 0.3);

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

export const InterimSectionStyled = styled.section`
	${container()}
	padding-top: 32px !important;
	padding-bottom: 32px !important;

	.sentence {
		display: flex;
		flex-direction: column;
	}

	.next-btn {
		box-sizing: content-box;
		padding: 16px 40px;

		font-size: 1.28rem;
	}
`;

export const FooterSectionStyled = styled(Layout.Footer)`
	.gs-footerDataContainer {
		padding: var(--footerPadding-gs-footer-one);
		height: 100%;
	}

	.gs-footerDataContainer .gs-footerInnerContainer {
		display: flex;
		justify-content: space-around;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-about-us {
		width: 50%;
		height: 100%;
		padding: 10px;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-fotLinks {
		width: 25%;
		padding: 10px;
	}

	.gs-footerDataContainer .gs-footerInnerContainer {
		padding-bottom: 10px;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-footBody {
		color: var(--footerBody-Text-Color);
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-footBody .gs-links-list {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.gs-footerDataContainer
		.gs-footerInnerContainer
		.gs-footBody
		.gs-links-list
		li {
		padding: 0px 0px 8px 0px;
		width: max-content;
	}

	.gs-footerDataContainer
		.gs-footerInnerContainer
		.gs-footBody
		.gs-links-list
		li
		a {
		cursor: pointer;
		display: block;
		transition: var(--transition-time-gs-footer-one);
	}

	.gs-footerDataContainer
		.gs-footerInnerContainer
		.gs-footBody
		.gs-links-list
		li:hover
		a {
	}

	.gs-footerDataContainer .gs-footerHr {
		margin: 20px 0px;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-fotter-left {
		width: 50%;
		text-align: left;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-fotter-left a {
		display: inline-block;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-fotter-left a:hover {
		cursor: pointer;
	}

	.gs-footerDataContainer .gs-footerInnerContainer .gs-fotter-right {
		width: 50%;
		justify-content: right;
		display: flex;
	}

	.gs-footerDataContainer
		.gs-footerInnerContainer
		.gs-fotter-right
		.gs-social-icon {
		border-radius: 50%;
		background-color: #818a91;
		cursor: pointer;
		height: 45px;
		width: 45px;
		margin-left: 10px;
		position: relative;
		transition: var(--transition-time-gs-footer-one);
		display: block;
	}

	.gs-footerDataContainer
		.gs-footerInnerContainer
		.gs-fotter-right
		.gs-social-icon
		svg {
		height: 30px;
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		fill: black;
	}

	.gs-footerDataContainer
		.gs-footerInnerContainer
		.gs-fotter-right
		.gs-social-icon:hover {
	}

	@media screen and (max-width: 2560px) {
		padding: 0px 20%;
	}

	@media screen and (max-width: 1440px) {
		padding: 0px 10%;
	}

	@media screen and (max-width: 1024px) {
		padding: 0px 5%;
	}

	@media screen and (max-width: 768px) {
		padding: 0px 0px;
	}

	@media screen and (max-width: 520px) {
		padding: 0px 0px;

		.gs-footerDataContainer .gs-footerInnerContainer .gs-about-us {
			width: 100%;
			padding: 0px;
		}

		.gs-footerDataContainer .gs-footerInnerContainer .gs-fotLinks {
			width: 50%;
			padding: 0px;
			padding-top: 20px;
		}

		.gs-footerDataContainer .gs-footerInnerContainer {
			justify-content: space-between;
			flex-wrap: wrap;
		}

		.gs-footerDataContainer .gs-footerInnerContainer .gs-fotter-left {
			width: 100%;
			text-align: center;
		}

		.gs-footerDataContainer .gs-footerInnerContainer .gs-fotter-right {
			width: 100%;
			padding-top: 20px;
			justify-content: center;
		}
	}

	@media screen and (max-width: 300px) {
		padding: 0px 0px;

		.gs-footerDataContainer .gs-footerInnerContainer .gs-fotLinks {
			width: 100%;
			padding: 0px;
			padding-top: 20px;
			text-align: center;
		}

		.gs-footerDataContainer
			.gs-footerInnerContainer
			.gs-footBody
			.gs-links-list
			li {
			padding: 0px 0px 8px 0px;
			width: 100%;
		}

		.gs-footerDataContainer
			.gs-footerInnerContainer
			.gs-fotter-right
			.gs-social-icon {
			width: 30px;
			height: 30px;
		}

		.gs-footerDataContainer
			.gs-footerInnerContainer
			.gs-fotter-right
			.gs-social-icon
			svg {
			height: 20px;
		}
	}

	@media screen and (max-width: 230px) {
		.gs-footerDataContainer
			.gs-footerInnerContainer
			.gs-fotter-right
			.gs-social-icon {
			width: 25px;
			height: 25px;
		}

		.gs-footerDataContainer
			.gs-footerInnerContainer
			.gs-fotter-right
			.gs-social-icon
			svg {
			height: 15px;
		}
	}
`;
