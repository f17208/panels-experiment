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
  JSXElementConstructor,
  ReactElement,
} from 'react';

export interface PanelsContextProps {
  panels: PanelProps[];
  addPanel: (panel: PanelProps) => void;
  removePanel: (id: string) => void;
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
  icon?: string | ReactElement<any, string | JSXElementConstructor<any>>;
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

  const removePanel = useCallback(async (id: string) => {
    const panelsToSet = panels.filter(panel => panel.id !== id);

    if (selectedPanelId === id) {
      const currentIndex = panels.findIndex(p => p.id === id);
      const nextSelected = panelsToSet.length
        ? panelsToSet[Math.max(panelsToSet.length - 1, currentIndex - 1)].id
        : null;

      setSelectedPanelId(nextSelected);
    }

    setPanels(panelsToSet);
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
