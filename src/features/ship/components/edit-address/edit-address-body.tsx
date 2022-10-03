import { FC, useCallback, useContext } from "react";
import { EditAddressFormContext } from "../../contexts";
import { DummyForm, EditAddressForm } from "../../forms";
import { EditNavigation } from "../navigation";

export const EditAddressBody: FC = () => {
  const form = useContext(EditAddressFormContext)!;

  const onSubmit = useCallback((values: DummyForm) => {
    console.log('EditAddress', values);
  }, []);

  return (
    <div>
      <EditNavigation />
      <h1>Edit Address</h1>
      <EditAddressForm onSubmit={onSubmit} {...form} />
    </div>
  );
};
