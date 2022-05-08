import styled from '@emotion/styled';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { Link } from 'react-router-dom';

export const Logo = styled(HandshakeIcon)`
	width: 36px;
	height: 36px;
	color: var(--color-primary);
	&:hover {
		cursor: pointer;
	}
`;

interface NavBarWrapperProps {
	sticky?: boolean;
}

export const NavBarWrapper = styled.div<NavBarWrapperProps>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: white;
	padding: 10px 5vw;
	z-index: 1;
`;

export const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	transition: 0.2s ease all;
	font-size: 1.1rem;
	z-index: 100;
	max-width: 1080px;
	margin: auto;
`;

export const NavLink = styled(Link)`
	position: relative;
	display: inline-block;
	color: var(--color-primary);
	font-weight: 700;
	letter-spacing: 1px;
	width: 120px;
	height: 36px;
	line-height: 36px;
	text-align: center;
	&::before {
		position: absolute;
		left: 0;
		bottom: -10px;
		content: '';
		display: inline-block;
		width: 100%;
		height: 3px;
		background-color: var(--color-primary);
		border-radius: 4px;
		transform: scale(0);
		transition: 0.1s ease all;
	}
	&:hover {
		cursor: pointer;
		color: red;
		&::before {
			transform: scale(1);
		}
	}
`;

export const NavLinkContainer = styled.div`
	justify-self: center;
	text-align: center;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 30px;
`;

export const AuthenticationButton = styled.button`
	background-color: var(--color-primary);
	padding: 5px 20px;
	width: max-content;
	border-radius: 10px;
	color: white;
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 1px;
	&:hover {
		cursor: pointer;
		background-color: var(--color-lighter-primary);
	}
`;
