import { Box } from "@mui/material";
import { NavLinks } from "../../components/navigation/NavLinks";
import { RoutesPaths } from "./constants";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const MainNavLinks = () => (
  <Box display="flex" gap={2} alignItems="center">
    <Logo style={{ width: 48, height: 48 }} />
    <NavLinks
      links={[
        { name: 'To Ship', path: RoutesPaths.ToShip },
        { name: 'Shipped', path: RoutesPaths.Shipped },
      ]}
    />
  </Box>
)