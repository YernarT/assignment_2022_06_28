import { css } from 'styled-components';

type conatinerAttr = 'padding' | 'width';

export default (attr: conatinerAttr = 'padding') => css`
	${attr === 'padding'
		? `
	padding: 0 5rem;
	`
		: `
	width: calc(100% - 5rem * 2);
	`}
	margin: auto;

	@media screen and (max-width: 800px) {
		${attr === 'padding'
			? `
	padding: 0 3rem;
	`
			: `
	width: calc(100% - 3rem * 2);
	`}
	}

	@media screen and (max-width: 600px) {
		${attr === 'padding'
			? `
	padding: 0 1.5rem;
	`
			: `
	width: calc(100% - 1.5rem * 2);
	`}
	}

	@media screen and (max-width: 400px) {
		${attr === 'padding'
			? `
	padding: 0 0.75rem;
	`
			: `
	width: calc(100% - 0.75rem * 2);
	`}
	}
`;
