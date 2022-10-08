import { Tab, Tabs } from "@mui/material";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export interface LinkTabProps {
  label: string;
  to: string;
}

export function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

export type TabLinksProps = {
  links: LinkTabProps[];
};

export const TabLinks: FC<TabLinksProps> = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <Tabs value={links.findIndex(link => link.to === pathname)}>
      {
        links.map(link => (
          <LinkTab
            key={link.to}
            label={link.label}
            to={link.to}
          />
        ))
      }
    </Tabs>
  );
};
