import styled from '@emotion/styled';

export const SpinnerWrapper = styled.div`
	position: absolute;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-background);
	content: '';
`;

export const SpinnerInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-image: linear-gradient(hotpink, cyan);
	animation: spin 1s infinite linear;
	&::before {
		content: '';
		width: 82%;
		height: 82%;
		background-color: var(--color-background);
		border-radius: 50%;
	}
	@keyframes spin {
		0% {
			transform: rotate(360deg);
		}
	}
`;
