import { NavLinks } from "../../components/navigation/NavLinks";
import { RoutesPaths } from "./constants";

export const MainNavLinks = () => (
    <NavLinks
      links={[
        { name: 'To Ship', path: RoutesPaths.ToShip },
        { name: 'Shipped', path: RoutesPaths.Shipped },
      ]}
    />
  )