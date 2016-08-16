import {Route, IndexRoute} from 'react-router';

import {App} from 'App.jsx';
import {CounterPage} from 'components/Counter/CounterPage.jsx';
import {AboutPage} from 'components/About/AboutPage.jsx';
import {TodoPage} from 'TodoList/TodoPage.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CounterPage}/>
    <Route path="counter" component={CounterPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="todo" component={TodoPage}/>
    {/*<Route path="about/:name" component={AboutPage}/>*/}
    {/* when you add /:name the url will become localhost:port/about/anyname */}
  </Route>
);
