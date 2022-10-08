import { useEffect, useMemo, useState } from "react";
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

const App = () => {
  const { panels } = usePanels();
  const [selectedPanelId, setSelectedPanelId] = useState<string | null>(null);

  const sortedPanels = useMemo(() => {
    return [
      ...panels.filter(p => p.id === selectedPanelId),
      ...panels.filter(p => p.id !== selectedPanelId),
    ];
  }, [selectedPanelId, panels]);

  useEffect(() => {
    setSelectedPanelId(pId => {
      return panels.length
        ? panels[panels.length - 1]?.id 
        : pId;
    })
  }, [setSelectedPanelId, panels]);

  return (
    <div className="main-container">
      <div className="main-view">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/to-ship" />} />
            {/* <Route path="/shipped" element={<Shipped />} /> */}
            <Route path="/to-ship" element={<ToShipPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      { sortedPanels.map((panel, i) => {
        const Component = panel.component;
        return (
          <div key={panel.id} className={i === 0 ? 'panel-show' : 'panel-hidden'}>
            <PanelsTabs
              setSelectedPanelId={setSelectedPanelId}
              selectedPanelId={selectedPanelId}
              panels={panels}
            />
            <Component />
          </div>
        )
      })}
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