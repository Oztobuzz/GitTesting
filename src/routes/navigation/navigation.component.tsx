import { Outlet } from 'react-router';
import NavBar from '../../components/navbar/navbar.component';

const Navigation = () => {
	return (
		<>
			<NavBar />
			<Outlet></Outlet>
		</>
	);
};

export default Navigation;
