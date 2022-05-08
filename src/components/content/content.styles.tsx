import styled from '@emotion/styled';

interface ContentWrapperProps {
	bg?: string;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
	padding: 50px 5vw;
	width: 100%;
	height: 100vh;
	background: ${({ bg }) => bg};
	overflow: hidden;
	> div {
		margin: auto;
		max-width: 1080px;
		transition: 0.5s ease all;
		transition-delay: 1s;
		opacity: 0;
		transform: translateY(50px);
		&.load {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

export const ContentTitle = styled.h2`
	font-size: 2.5rem;
`;

export const ContentBody = styled.div`
	font-size: 1rem;
`;
