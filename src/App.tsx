import { useMemo } from "react";
import { useWindowSize } from 'react-use';
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
import { ShippedPage } from "./features/pages/shipped/Shipped.page";

import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import 'react-reflex/styles.css'

const App = () => {
  const { panels, selectedPanelId } = usePanels();
  const { width: windowWidth } = useWindowSize();

  const panelsElementProps: {
    flex: number;
    minSize: number;
    maxSize: number;
  } = useMemo(() => {
    if (panels.length) {
      if (windowWidth < 400) {
        // FIXME 
        return {
          flex: 1,
          minSize: windowWidth,
          maxSize: windowWidth,
        }
      }
      return {
        flex: 0.3,
        minSize: 330,
        maxSize: 880,
      }
    } else {
      return {
        flex: 0,
        minSize: 0,
        maxSize: 0,
      }
    }
  }, [panels, windowWidth]);

  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement
        flex={panels.length === 0 ? 1 : undefined}
        minSize={440}
      >
        <div className="main-view">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/to-ship" />} />
              <Route path="/shipped" element={<ShippedPage />} />
              <Route path="/to-ship" element={<ToShipPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ReflexElement>

      <ReflexSplitter />

      <ReflexElement {...panelsElementProps}>
        <div
          className={`panels-container ${
            selectedPanelId && panels.length ? 'panels-open' : 'panels-closed'
          }`}
        >
          <PanelsTabs />
          { panels.map(panel => {
            const Component = panel.component;
            const mustShow = panels.length === 1
              || selectedPanelId === panel.id;
            return (
              <div
                key={panel.id}
                className={mustShow ? 'panel-show' : 'panel-hidden'}
              >
                <Component />
              </div>
            )
          })}
        </div>
      </ReflexElement>
    </ReflexContainer>

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