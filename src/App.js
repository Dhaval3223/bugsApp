import { Provider } from 'react-redux';

import Bugs from './components/Bugs';

import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
    </Provider>
  );
}

export default App;
