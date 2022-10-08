import { Alert, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../../types/order";
import { ShipOrderFlowSteps } from "../ship-orders/constants";

export type RatesBodyProps = {
  order: Order;
}

export const RatesBody: FC<RatesBodyProps> = ({ order }) => {
  const total = useMemo(() => {
    return Object.values(order.parcel).reduce((acc, cur) => acc + cur, 0);
  }, [order]);

  return <Container maxWidth="sm">
    <Typography py={1} variant="h4">Rates</Typography>
    <Link to={ShipOrderFlowSteps.EditAddress}>Edit order</Link>
    <Box py={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="info">Carrier 1: {total}€</Alert>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="warning">Carrier 2: not available</Alert>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="error">Carrier 3: super-weird error</Alert>
        </Grid>
      </Grid>
    </Box>
  </Container>
};
