import {
  useMemo,
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';

export interface PanelsContextProps {
  panels: PanelProps[];
  addPanel: (panel: PanelProps) => void;
  removePanel: (id: string, delay?: number) => void;
  selectedPanelId: string | null,
  setSelectedPanelId: Dispatch<SetStateAction<string | null>>;
}

const initialValues: PanelsContextProps = {
  panels: [],
  addPanel: () => void 0,
  removePanel: () => void 0,
  selectedPanelId: null,
  setSelectedPanelId: () => null,
}

export const PanelContext = createContext<PanelsContextProps>(initialValues);

export type PanelsProviderProps = {
  children: ReactNode;
};

export type PanelProps = {
  component: () => JSX.Element;
  title: string;
  id: string;
}

export const PanelsProvider: FC<PanelsProviderProps> = ({
  children,
}) => {
  const [panels, setPanels] = useState<PanelProps[]>([]);
  const [selectedPanelId, setSelectedPanelId] = useState<string | null>(null);

  const addPanel = useCallback((panel: PanelProps) => {
    setPanels(currentPanels => {
      if (currentPanels.find(p => p.id === panel.id)) {
        return currentPanels;
      }
      setSelectedPanelId(panel.id);
      return [
        ...currentPanels,
        panel,
      ];
    })
  }, [setPanels]);

  const removePanel = useCallback(async (id: string, delay = 0) => {
    const panelsToSet = panels.filter(panel => panel.id !== id);

    console.log('oh porcoddio', panels, id);
    if (selectedPanelId === id) {
      const currentIndex = panels.findIndex(p => p.id === id);
      console.log('panelindex', currentIndex);
      const nextSelected = panelsToSet.length
        ? panelsToSet[Math.max(panelsToSet.length - 1, currentIndex - 1)].id
        : null
      console.log('next', nextSelected);
      setTimeout(() => setSelectedPanelId(nextSelected));
    }

    setTimeout(() => {
      setPanels(panelsToSet);
    }, delay);
  }, [setPanels, panels, selectedPanelId, setSelectedPanelId]);

  const value = useMemo(
    () => ({
      panels,
      addPanel,
      removePanel,
      selectedPanelId,
      setSelectedPanelId,
    }),
    [
      panels,
      addPanel,
      removePanel,
      selectedPanelId,
      setSelectedPanelId,
    ]
  );

  return (
    <PanelContext.Provider value={value}>
      {children}
    </PanelContext.Provider>
  );
};

export function usePanels() {
  return useContext(PanelContext);
}
