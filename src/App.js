import { Route, Switch, useLocation } from 'react-router';
import Sidebar from './Sidebar';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Calender from './Pages/Calender';
import Documents from './Pages/Documents';
import Projects from './Pages/Projects';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import SupportUs from './Pages/SupportUs';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Blog';

const Pages = styled.div`
  margin-left: 60px;
  padding-top: 20px;
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            <Route path="/calender" component={Calender} />
            <Route path="/blog" component={Blog} />
            <Route path="/support-us" component={SupportUs} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
