// Globals
import 'core-js/stable'; // Babel polyfills: https://github.com/zloirock/core-js#babel
import 'regenerator-runtime/runtime'; // Babel polyfills: https://github.com/zloirock/core-js#babel
import React from 'react';
import './styles.scss'; // App-level styles
import 'theme/themes.scss';

// Misc
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import { Home } from 'pages/Home';

function App(): React.JSX.Element {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

// CSR
const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
root.render(<App />);
