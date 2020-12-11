import React from 'react';

const Personal = React.lazy(() => import('./pages/Personal/index'));

//Special
const PageError = React.lazy(() => import('./pages/Pages/Special/PageError'));

//Tutorials
const PageTutorialsSidebar = React.lazy(() => import('./pages/Personal/Tutorials/PageTutorialsSidebar'));
const PageTutorialDetail = React.lazy(() => import('./pages/Personal/Tutorials/PageTutorialDetail'));

//Portfolio Page
const Portfolio = React.lazy(() => import('./pages/Personal/Portfolio/PagePortfolioGrid'));
const PortfolioDetail = React.lazy(() => import('./pages/Personal/Portfolio/PagePortfolioDetail'));

//Members
const PageAuth = React.lazy(() => import('./pages/Personal/PageAuth'));
const Login = React.lazy(() => import('./pages/Personal/PageLogin'));
const SignUp = React.lazy(() => import('./pages/Personal/PageSignup'));
const RecoveryPW = React.lazy(() => import('./pages/Personal/PageRecoveryPassword'));

const routes = [

    // Landing
    { path: '/index-personal', component: Personal },

    //Tutorials
    { path: '/page-tutorials-sidebar', component: PageTutorialsSidebar },
    { path: '/page-tutorial-detail/:postId', component: PageTutorialDetail },

    //Portfolio
    { path: '/page-portfolio', component: Portfolio },
    { path: '/page-portfolio-detail', component: PortfolioDetail },
     
    //Members
    { path: '/page-auth', component: PageAuth, isWithoutLayout: true },
    { path: '/page-recovery', component: RecoveryPW, isWithoutLayout: true },

    //Index root
    { path: '/', component: Personal, isWithoutLayout : true, exact : true },
    { component: PageError, isWithoutLayout : true, exact : false },

];

export default routes;
