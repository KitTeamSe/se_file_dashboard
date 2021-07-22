import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';
import routes from 'src/routes';

const App = () => {
	const routing = useRoutes(routes);

	return (
		<ThemeProvider theme={theme}>
			{routing}
		</ThemeProvider>
	);
};

export default App;
