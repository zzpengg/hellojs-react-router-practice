import {Counter} from 'Counter/Counter.jsx';
require('Counter/CounterPage.scss');
export class CounterPage extends React.Component {
  render() {
    return (
      <div>
        <Counter increment={1} />
        <Counter increment={5} />
      </div>
    );
  }
}
