import { Box } from "@mui/material";
import { FC, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { IParcelForm, ParcelForm } from "../../../../components/forms/ParcelForm";
import { EditOrderTabLinks } from "./EditOrderNavLinks";

export type EditParcelsBodyProps = {
  parcelForm: UseFormReturn<IParcelForm>;
}

export const EditParcelsBody: FC<EditParcelsBodyProps> = ({ parcelForm }) => {
  const onSubmit = useCallback((values: IParcelForm) => {
    console.log('EditParcels', values);
  }, []);

  return <Box p={2}>
    <EditOrderTabLinks />
    <ParcelForm form={parcelForm} onSubmit={onSubmit} />
  </Box>
};
