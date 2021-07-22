import { Navigate } from 'react-router-dom';
import Layout from 'src/components/Layout';
import MainLayout from 'src/components/MainLayout';

const routes = [
	{
		path: 'app',
		element: <Layout />,
		children: [
		]
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '/', element: <Navigate to="/app/dashboard" /> },
		]
	}
];

export default routes;
