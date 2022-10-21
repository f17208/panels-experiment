import { Box, Typography } from "@mui/material";
import { MainNavLinks } from "../MainNavLinks";

export const ShippedPage = () => { 
  return (
    <Box>
      <MainNavLinks />
      <Box p={2}>
        <Typography variant="h4">Shipped</Typography>
      </Box>
      <Box p={2}>
        <Typography>
          Well, this is just a fake page to show different routing between pages and drawers...
        </Typography>
      </Box>
    </Box>
  )
};