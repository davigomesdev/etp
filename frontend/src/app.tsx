//react imports
import { useEffect } from 'react';

//react-router imports
import { BrowserRouter, Route, Routes, Outlet, useLocation } from 'react-router-dom';

//enums imports
import { PageUrlEnum } from './domain/enums/page-url.enum';

//layouts imports
import Layout from './presentation/components/layouts/layout/layout';

//pages imports
import Home from './presentation/pages/home/screens/home';
import Courses from './presentation/pages/courses/screens/courses';
import About from './presentation/pages/about/screens/about';
import Course from './presentation/pages/courses/screens/course';
import Blog from './presentation/pages/blog/screens/blog';
import Post from './presentation/pages/blog/screens/post';
import Candeias from './presentation/pages/units/screens/candeias';
import Vitoria from './presentation/pages/units/screens/vitoria';
import Gravata from './presentation/pages/units/screens/gravata';

const titles: Record<string, string> = {
	[PageUrlEnum.COURSE]: 'ETP | Curso',
	[PageUrlEnum.COURSES]: 'ETP | Cursos',
	[PageUrlEnum.UNITS]: 'ETP | Unidades',
	[PageUrlEnum.BLOG]: 'ETP | Blog',
	[PageUrlEnum.ABOUT]: 'ETP | Sobre',
};

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
		});
	}, [pathname]);

	return null;
};

const TitleManager = () => {
	const location = useLocation();

	useEffect(() => {
		const currentPath = location.pathname;
		const title = titles[currentPath] || 'ETP';
		document.title = title;

		if (currentPath === '/teste-vocacional') {
			window.location.href = 'https://crm.etpeducacional.com.br/teste-vocacional';
		}
	}, [location]);

	return null;
};

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<TitleManager />
			<Routes>
				<Route
					element={
						<Layout>
							<Outlet />
						</Layout>
					}
				>
					<Route path={PageUrlEnum.HOME} element={<Home />} />
					<Route path={`${PageUrlEnum.COURSE}:id`} element={<Course />} />
					<Route path={`${PageUrlEnum.POST}:id`} element={<Post />} />
					<Route path={PageUrlEnum.COURSES} element={<Courses />} />
					<Route path={PageUrlEnum.ABOUT} element={<About />} />
					<Route path={PageUrlEnum.BLOG} element={<Blog />} />
					<Route path={PageUrlEnum.VITORIA} element={<Vitoria />} />
					<Route path={PageUrlEnum.GRAVATA} element={<Gravata />} />
					<Route path={PageUrlEnum.CANDEIAS} element={<Candeias />} />
					<Route path={PageUrlEnum.DEFAULT} element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
