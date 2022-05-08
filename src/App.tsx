import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';

import Spinner from './components/spinner/spinner.component';
import { Navigate } from 'react-router';
import Shop from './routes/shop/shop.component';

const Navigation = lazy(() => import('./routes/navigation/navigation.component'));
const Home = lazy(() => import('./routes/home/home.component'));

const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />}></Route>
					<Route path='/shop' element={<Shop />}></Route>
					<Route></Route>
					<Route path='*' element={<Navigate to='/' />}></Route>
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
