import { IAddressForm } from "../components/forms/AddressForm";
import { IParcelForm } from "../components/forms/ParcelForm";

export type Order = {
  id: string;
  parcel: IParcelForm;
  senderAddress: IAddressForm;
  recipientAddress: IAddressForm;
}