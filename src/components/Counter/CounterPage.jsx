import {Counter} from './Counter.jsx';
require('./CounterPage.scss');
export class CounterPage extends React.Component {
  render() {
    return (
      <div>
        <Counter increment={2} />
        <Counter increment={5} />
      </div>
    );
  }
}
