import { Box, Container } from "@mui/material";
import { LinkTabProps, TabLinks } from "../../../components/navigation/TabLinks";
import { ShipOrderFlowSteps } from "../ship-orders/constants";

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
    <Container maxWidth="xs">
      <Box pb={2}>
        <TabLinks links={links} />
      </Box>
    </Container>
  );
};
