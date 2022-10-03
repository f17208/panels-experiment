import {
  createContext,
} from 'react';
import { UseFormReturn } from 'react-hook-form';
import { DummyForm } from '../ship/forms';

export const EditAddressFormContext = createContext<UseFormReturn<DummyForm> | null>(null);
export const EditParcelsFormContext = createContext<UseFormReturn<DummyForm> | null>(null);
