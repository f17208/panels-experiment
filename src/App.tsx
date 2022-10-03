import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import { ManualShipmentFlow, ShipFlows, ShipOrdersFlow } from "./features/ship";
import { PanelsProvider, usePanels } from "./features/panels";
import { Navigation } from "./features/navigation";

export const UrlNavigation = () => (
  <Navigation
    links={[
      { name: 'To Ship', path: '/to-ship' },
      { name: 'Shipped', path: '/shipped' },
    ]}
  />
)

const ToShip: FC= () => {
  const { addPanel } = usePanels();

  const onManualShipment = useCallback(
    () => {
      addPanel({
        id: ShipFlows.ManualShipment,
        component: () => <ManualShipmentFlow id={ShipFlows.ManualShipment} />
      })
    },
    [addPanel],
  );

  const onShipOrders = useCallback(
    () => {
      addPanel({
        id: ShipFlows.ShipOrders,
        component: () => <ShipOrdersFlow id={ShipFlows.ShipOrders} />
      })
    },
    [addPanel],
  );

  return (
    <div>
      <UrlNavigation />
      <h1>To Ship</h1>
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={onManualShipment}>
          Manual Shipment Flow
        </button>
        <button onClick={onShipOrders}>
          Ship Orders Flow
        </button>
      </div>
    </div>
  )
};

const Shipped: FC = () => {
  return <div>
    <UrlNavigation />
    <h1>Shipped</h1>
  </div>
};

const App = () => {
  const { panels } = usePanels();
  const [selectedPanelId, setSelectedPanelId] = useState<string | null>();

  const sortedPanels = useMemo(() => {
    return [
      ...panels.filter(p => p.id === selectedPanelId),
      ...panels.filter(p => p.id !== selectedPanelId),
    ];
  }, [selectedPanelId, panels]);

  useEffect(() => {
    setSelectedPanelId(pId => {
      if (!panels.find(p => p.id === pId)) {
        return panels[0]?.id || null;
      }
      return pId;
    })
  }, [setSelectedPanelId, panels]);

  return (
    <div className="main-container">
      <div className="main-view">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/to-ship" />} />
            <Route path="/shipped" element={<Shipped />} />
            <Route path="/to-ship" element={<ToShip />} />
          </Routes>
        </BrowserRouter>
      </div>

      { sortedPanels.map((panel, i) => {
        const Component = panel.component;
        return (
          <div key={panel.id} className={i === 0 ? 'panel-show' : 'panel-hidden'}>
            {panels.length > 1 && (
              <div className="panels-tabs">
                {panels.map(panel => (
                  <button
                    key={panel.id}
                    className={panel.id === selectedPanelId ? 'panel-active' : undefined}
                    onClick={() => setSelectedPanelId(panel.id)}
                  >
                    {panel.id}
                  </button>
                ))}
              </div>
            )}
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