import routes from './routes';
import {Router, browserHistory, hashHistory} from 'react-router';

ReactDOM.render((
  <Router children={routes}  history={browserHistory}/>
), document.getElementById('root'));
