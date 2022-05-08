import styled from '@emotion/styled';

export const CardModalWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #0000008c;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CardContentWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	width: 60%;
	padding: 0 20px;
	background-color: var(--color-secondary);
	font-size: 1.1rem;
	font-weight: 600;
`;
