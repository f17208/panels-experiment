import { Box } from "@mui/material";
import { FC, useCallback } from "react";
import { IParcelForm, ParcelFormInContext } from "../../../components/forms/ParcelForm";
import { EditOrderTabLinks } from "./EditOrderNavLinks";

export const EditParcelsBody: FC = () => {
  const onSubmit = useCallback((values: IParcelForm) => {
    console.log('EditParcels', values);
  }, []);

  return <Box p={2}>
    <EditOrderTabLinks />
    <ParcelFormInContext onSubmit={onSubmit} />
  </Box>
};
