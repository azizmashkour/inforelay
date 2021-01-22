import React from 'react';
import Login from '../components/auth/Login';
import List from '../components/articles/List';
import Editor from '../components/editor/Editor';
import Request from '../components/request/Request';
import Profile from '../components/profile/Profile';
import ArticleDetails from '../components/articles/Details';
import Dashboard from '../components/dashboard/Dashboard';
import Api from '../components/api/Api';
import RequestDetails from '../components/request/Details';
import Documentation from '../components/documentation/Documentation';
import ContactUs from '../components/contact-us/ContactUs';
import TermsOfUse from '../components/terms-of-use/TermsOfUse';
import PrivacyPolicy from '../components/privacy-policy/PrivacyPolicy';
import Team from '../components/team/Team';
import NotFound from '../components/ui/not-found/NotFound';
import HelpCenter from '../components/help-center/HelpCenter';
import Notifications from '../components/notifications/Notifications';

const routes = [
	{
    exact: true,
		path: '/',
		component: List,
		isPrivate: false,
	},
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/api',
		component: Api,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: true,
	},
	{
		path: '/article/:articleId',
		component: ArticleDetails,
		isPrivate: false,
	},
	{
		path: '/request',
		component: Request,
		isPrivate: true,
	},
	{
		path: '/request/:requestId',
		component: RequestDetails,
		isPrivate: true,
	},
	{
		path: '/profile',
		component: Profile,
		isPrivate: true,
	},
	{
		path: '/rich-editor',
		component: Editor,
		isPrivate: false,
	},
	{
		path: '/notifications',
		component: Notifications,
		isPrivate: true,
	},
	{
		path: '/help-center',
		component: HelpCenter,
		isPrivate: false,
	},
	{
		path: '/documentation',
		component: Documentation,
		isPrivate: false,
	},
	{
		path: '/contact-us',
		component: ContactUs,
		isPrivate: false,
	},
	{
		path: '/team',
		component: Team,
		isPrivate: false,
	},
	{
		path: '/terms-of-use',
		component: TermsOfUse,
		isPrivate: false,
	},
	{
		path: '/privacy-policy',
		component: PrivacyPolicy,
		isPrivate: false,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: false,
	},
];

export default routes;
