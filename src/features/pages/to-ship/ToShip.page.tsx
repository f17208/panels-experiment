import { NoteAdd, Send } from "@mui/icons-material";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useMemo } from "react";
import { Order } from "../../../types/order";
import { usePanels } from "../../panels/contexts";
import { ManualShipmentFlow } from "../../panels/ship/manual-shipment";
import { ShipOrderFlow } from "../../panels/ship/ship-orders";
import { MainNavLinks } from "../MainNavLinks";
import fixtures from "./fixtures";

export const ToShipPage = () => {
  const { addPanel } = usePanels();

  const onShipOrder = useCallback(
    (order: Order) => {
      const panelId = `ship-${order.id}`;
      addPanel({
        id: panelId,
        title: `Ship ${order.id}`,
        icon: <Send />,
        component: () => <ShipOrderFlow panelId={panelId} order={order} />
      })
    },
    [addPanel],
  );

  const onManualShipment = useCallback(
    () => {
      const panelId = 'manual-shipment';
      addPanel({
        id: panelId,
        title: 'Manual Shipment',
        icon: <NoteAdd />,
        component: () => <ManualShipmentFlow panelId={panelId} />
      })
    },
    [addPanel],
  );

  const orders: Order[] = useMemo(() => {
    return fixtures;
  }, []);

  return (
    <Box>
      <MainNavLinks />
      <Box p={2} display="flex" justifyContent="space-between" flexWrap="nowrap">
        <Typography variant="h4">To Ship</Typography>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={onManualShipment}
        >
          Manual Shipment
        </Button>
      </Box>
      <TableContainer component={Paper} square>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>From city</TableCell>
              <TableCell>To city</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell>{order.senderAddress.city}</TableCell>
                <TableCell>{order.recipientAddress.city}</TableCell>
                <TableCell>{order.parcel.weight} kg</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => onShipOrder(order)}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    ship
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
};