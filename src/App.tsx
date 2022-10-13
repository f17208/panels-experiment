import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';

import { ToShipPage } from "./features/pages/to-ship/ToShip.page";
import { PanelsTabs } from "./features/panels/ship/components/PanelTabs";

import { PanelsProvider, usePanels } from "./features/panels/contexts";
// import { SetupPage } from "./features/pages/setup/Setup.page";
import { SetupPage } from "./features/pages/setup-2/Setup.page";
import { ShippedPage } from "./features/pages/shipped/Shipped.page";

const App = () => {
  const { panels, selectedPanelId } = usePanels();

  const firstPage = sessionStorage.getItem('setupDone')
    ? '/to-ship'
    : '/setup'

  return (
    <div className="main-container">
      <div className="main-view" style={{ flexGrow: panels.length ? 1 : 2 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={firstPage} />} />
            <Route path="/setup" element={<SetupPage />} />
            <Route path="/shipped" element={<ShippedPage />} />
            <Route path="/to-ship" element={<ToShipPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className={`panels-container ${selectedPanelId && panels.length ? 'panels-open' : 'panels-closed'}`}>
        { panels.map(panel => {
          const Component = panel.component;
          const mustShow = panels.length === 1
            || selectedPanelId === panel.id;
          return (
            <div
              key={panel.id}
              className={mustShow ? 'panel-show' : 'panel-hidden'}
            >
              <PanelsTabs />
              <Component />
            </div>
          )
        })}
      </div>
    </div>
  );
};

const AppWithContexts = () => {
  return (
    <PanelsProvider>
      <App />
    </PanelsProvider>
  )
}

export default AppWithContexts;