import { Edit } from "@mui/icons-material";
import { Alert, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import { Order } from "../../../../types/order";
import { ShipOrderFlowSteps } from "../constants";

export type RatesBodyProps = {
  order?: Order;
}

export const RatesBody: FC<RatesBodyProps> = ({ order }) => {
  const total = useMemo(() => {
    return Object.values(order?.parcel || {}).reduce((acc, cur) => acc + cur, 0);
  }, [order]);

  return <Container maxWidth="sm">
    <Typography py={1} variant="h4">Rates</Typography>
      <Box display="flex" gap={0.5} alignItems="center">
        <Edit fontSize="small" />
        <Link to={ShipOrderFlowSteps.EditAddress}>
          <Typography fontSize="medium" variant="subtitle2">
            edit order
          </Typography>
        </Link>
      </Box>
    <Box py={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="info">
            <Typography variant="subtitle2">Carrier 1</Typography>
            <Typography>{total}€</Typography>
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="warning">
            <Typography variant="subtitle2">Carrier 2</Typography>
            <Typography>not available</Typography>
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Alert severity="error">
            <Typography variant="subtitle2">Carrier 3</Typography>
            <Typography>super weird error</Typography>
          </Alert>
        </Grid>
      </Grid>
    </Box>
  </Container>
};
