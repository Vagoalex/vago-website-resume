import { lazy, Suspense } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

import decorationFalcon from '../../assets/images/decorations/decorationFalcon.png';
import decorationIronMan from '../../assets/images/decorations/ironMan.png';
import './App.scss';

const Characters = lazy(() => import('../pages/characters/Characters'));
const Comics = lazy(() => import('../pages/comics/Comics'));
const Page404 = lazy(() => import('../pages/page404/Page404'));
const SinglePage = lazy(() => import('../pages/SinglePage/SinglePage'));
const SingleComicPage = lazy(() =>
  import('../pages/SinglePage/SingleComicLayout/SingleComicLayout')
);
const SingleCharacterPage = lazy(() =>
  import('../pages/SinglePage/SingleCharacterLayout/SingleCharacterLayout')
);
const LoadingSinglePage = lazy(() =>
  import('../pages/SinglePage/loadingSinglePage/LoadingSinglePage')
);

const App = () => {
  return (
    <Router>
      <header className='header'>
        <Header Characters={Characters} Comics={Comics} />
      </header>
      <main className='main'>
        <Suspense fullback={<LoadingSinglePage />}>
          <Switch>
            <Route exact path='/'>
              <Characters />
            </Route>
            <Route exact path='/comics'>
              <Comics />
            </Route>
            <Route exact path={'/comics/:id'}>
              <SinglePage Component={SingleComicPage} dataType={'comics'} />
            </Route>
            <Route exact path={'/characters/:id'}>
              <SinglePage
                Component={SingleCharacterPage}
                dataType={'characters'}
              />
            </Route>
            <Route exact path='*'>
              <Page404 />
            </Route>
          </Switch>
        </Suspense>
        <img
          className='decoration-falcon'
          src={decorationFalcon}
          alt='decorationFalcon'
        />
        <img
          className='decoration-iron-Man'
          src={decorationIronMan}
          alt='decorationIronMan'
        />
      </main>
    </Router>
  );
};

export default App;
