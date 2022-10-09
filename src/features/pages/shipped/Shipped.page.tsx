import { Box, Typography } from "@mui/material";
import { MainNavLinks } from "../MainNavLinks";

export const ShippedPage = () => { 
  return (
    <Box>
      <MainNavLinks />
      <Box p={2}>
        <Typography variant="h4">Shipped</Typography>
      </Box>
    </Box>
  )
};