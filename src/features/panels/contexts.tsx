import {
  useMemo,
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from 'react';

export interface PanelsContextProps {
  panels: PanelProps[];
  addPanel: (panel: PanelProps) => void;
  removePanel: (id: string) => void;
}

const initialValues: PanelsContextProps = {
  panels: [],
  addPanel: () => void 0,
  removePanel: () => void 0,
}

export const PanelContext = createContext<PanelsContextProps>(initialValues);

export type PanelsProviderProps = {
  children: ReactNode;
};

export type PanelProps = {
  component: () => JSX.Element;
  id: string;
}

export const PanelsProvider: FC<PanelsProviderProps> = ({
  children,
}) => {
  const [panels, setPanels] = useState<PanelProps[]>([]);

  const addPanel = useCallback((panel: PanelProps) => {
    setPanels(currentPanels => {
      if (currentPanels.find(p => p.id === panel.id)) return currentPanels;
      return [
        panel,
        ...currentPanels,
      ];
    })
  }, [setPanels]);

  const removePanel = useCallback((id: string) => {
    setPanels(currentPanels => currentPanels.filter(panel => panel.id !== id));
  }, [setPanels]);

  const value = useMemo(
    () => ({
      panels,
      addPanel,
      removePanel,
    }),
    [
      panels,
      addPanel,
      removePanel,
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
