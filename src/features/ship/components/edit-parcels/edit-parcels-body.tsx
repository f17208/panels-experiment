import { FC, useCallback, useContext } from "react";
import { EditParcelsFormContext } from "../../contexts";
import { DummyForm, EditParcelsForm } from "../../forms";
import { EditNavigation } from "../navigation";

export const EditParcelsBody: FC = () => {
  const form = useContext(EditParcelsFormContext)!;

  const onSubmit = useCallback((values: DummyForm) => {
    console.log('EditParcels', values);
  }, []);

  return <div>
    <EditNavigation />
    <h1>Edit Parcels</h1>
    <EditParcelsForm onSubmit={onSubmit} {...form} />
  </div>
};
