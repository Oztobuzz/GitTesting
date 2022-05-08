import styled from '@emotion/styled';

export const Greeting = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: var(--color-);
	opacity: 1;
	margin: auto;
	height: calc(100vh + 0.1px);
	padding-bottom: 36px;
	gap: 20px;
	max-width: 1080px;
	padding: 0px 5vw;
`;

export const GreetingTitle = styled.h1`
	font-size: 5.5rem;
	color: var(--color-primary);
`;
export const GreetingSubtitle = styled.h2`
	font-size: 2rem;
	color: var(--color-secondary);
`;

interface BackgroundProps {
	scrollTop?: number;
}

export const BackgroundImage = styled.img<BackgroundProps>`
	object-fit: cover;
	object-position: center;
	width: 100%;
	height: calc(100vh);
`;

export const BackgroundWrapper = styled.div`
	width: 100%;
	height: calc(100vh);
	top: 0;
	left: 0;
	position: absolute;
	z-index: -1;
`;

export const BackgroundOverlay = styled.div`
	content: '';
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #1212122d
`;

export const HomeContent = styled.div`
	width: 100%;
	background-color: var(--color-background);
`;
