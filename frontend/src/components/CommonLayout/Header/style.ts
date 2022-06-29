import styled from 'styled-components';

// 公共样式
import { container } from '@/assets/style';

export const HeaderStyled = styled.header<{ navPanelVisible: boolean }>`
	width: 100%;
	height: 60px;
	${container()}
	padding-top: 12px !important;
	padding-bottom: 12px !important;

	user-select: none;

	&::after {
		content: '';

		${container('width')}
		height: 2px;
		background-color: #fff;

		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%);
	}

	display: flex;
	align-items: center;

	position: absolute;
	top: 32px;
	z-index: 1000;

	.brand {
		display: flex;
		align-items: center;
		gap: 8px;

		&-name {
			margin-bottom: 0;

			color: #fff;
			font-size: 1.54rem;
			font-weight: bolder;
		}

		&-image {
			${({ theme }) => theme.shape.iconAppearance.apply}
		}
	}

	.navigator-switch {
		${({ theme }) => theme.shape.iconAppearance.apply}
		cursor: pointer;

		margin-left: 16px;
		display: none;

		@media screen and (max-width: 500px) {
			display: block;
			margin-left: auto;
		}
	}

	.navigator {
		margin-left: auto;

		display: flex;
		align-items: center;
		gap: 16px;

		@media screen and (max-width: 500px) {
			display: none;
		}

		a {
			&::after {
				content: '';
				display: block;

				width: 32%;
				height: 2px;
				margin: 8px auto auto;
				background-color: ${({ theme }) => theme.palette.primary};

				transition: width 0.3s ease;
			}

			&:hover {
				&::after {
					width: 100%;
				}
			}
		}
	}

	.navigator-panel {
		display: none;

		position: absolute;
		top: 115%;
		left: 50%;
		transform-origin: top center;
		transform: translateX(-50%)
			${({ navPanelVisible }) => (navPanelVisible ? 'scaleY(1)' : 'scaleY(0)')};

		${container('width')}
		padding: 24px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: ${({ theme }) => theme.shape.borderRadius};
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(1.5px);
		border: 2px solid #fff;

		transition: transform 0.3s ease;

		@media screen and (max-width: 500px) {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.navigator2 {
			display: flex;
			flex-direction: column;
			gap: 16px;

			a {
				text-shadow: 0 0 4px ${({ theme }) => theme.palette.primary};
			}
		}
	}
`;
