import routes from './routes';
import {Router, browserHistory} from 'react-router';

ReactDOM.render((
  <Router children={routes}  history={browserHistory}/>
), document.getElementById('root'));
