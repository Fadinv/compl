import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Main} from './Components/Main/Main'

const Home = React.lazy(() => import('./Pages/Home/Home').then(x => ({default: x.Home})));
const ProductPage = React.lazy(() => import('./Pages/ProductPage/ProductPage').then(x => ({default: x.ProductPage})));
const NameForm = React.lazy(() => import('./Pages/NameForm').then(x => ({default: x.NameForm})));

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<React.Suspense fallback={<>loading...</>}>
					<Main>
						<Route exact path="/" render={(x) => <Home {...x}/>}/>
						<Route path="/products/:id?" render={(x) => <ProductPage {...x}/>}/>
						<Route exact path="/form" render={(x) => <NameForm {...x}/>}/>
					</Main>
				</React.Suspense>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
