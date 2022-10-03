import { FC } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";

export type NavigationProps = {
  links: ({ name: string; path: string; })[];
}

export const Navigation: FC<NavigationProps> = ({ links }) => {
  const location = useLocation();
  const match = matchRoutes(
    links.map(link => link.path).map(path => ({ path })),
    location,
  ) || [];

  const route = match.length ? match[0].route : undefined;

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {links.map(({ name, path }) => {
        return <Link
          to={path}
          key={path}
          style={{ fontWeight: route?.path === path ? 'bold' : undefined}}
        >
          {name}
        </Link>
      })}
    </div>
  )
}
