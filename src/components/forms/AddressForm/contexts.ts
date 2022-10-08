import { createContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "./types";

export const getAddressContext = () => createContext<UseFormReturn<IAddressForm> | null>(null);
export const AddressFormContext = getAddressContext();
