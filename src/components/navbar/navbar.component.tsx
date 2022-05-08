import { useNavigate } from 'react-router';
import {
	Logo,
	NavBarWrapper,
	NavLink,
	NavLinkContainer,
	AuthenticationButton,
	NavBarContainer,
} from './navbar.styles';

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<NavBarWrapper>
			<NavBarContainer>
				<Logo onClick={() => navigate('/')} />
				<NavLinkContainer>
					<NavLink to='/'>About us</NavLink>
					<NavLink to='/shop'>Shop</NavLink>
					<NavLink to='/'>Contact</NavLink>
				</NavLinkContainer>
				<AuthenticationButton>Sign In</AuthenticationButton>
			</NavBarContainer>
		</NavBarWrapper>
	);
};

export default NavBar;
