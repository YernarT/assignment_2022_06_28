import styled from 'styled-components';

// 公共类
import { container } from '@/assets/style';

export const ArticlePageStyled = styled.div`
	${container()}
	min-height: 100vh;

	background-color: #b8c6db;
`;

export const ArticleListStyled = styled.div`
	padding-top: calc(60px + 32px + 16px) !important;
	padding-bottom: 16px !important;
`;
