import { Box } from "@mui/material";
import { LinkTabProps, TabLinks } from "../../../../components/navigation/TabLinks";
import { ShipOrderFlowSteps } from "../constants";

const links: LinkTabProps[] = [
  {
    label: 'Address',
    to: ShipOrderFlowSteps.EditAddress,
  },
  {
    label: 'Parcels',
    to: ShipOrderFlowSteps.EditParcels,
  }
];

export const EditOrderTabLinks = () => {
  return (
    <Box pb={2} px={2}>
      <TabLinks links={links} />
    </Box>
  );
};
