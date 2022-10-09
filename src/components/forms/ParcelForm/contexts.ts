import { createContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { IParcelForm } from "./types";

export const getParcelContext = () => createContext<UseFormReturn<IParcelForm> | null>(null);
