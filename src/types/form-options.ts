import { FormState } from "react-hook-form";
import { IParcelForm } from "../components/forms/ParcelForm";

export interface UseFormOptions {
  preloadFormStateFields: (keyof FormState<IParcelForm>)[]
}

