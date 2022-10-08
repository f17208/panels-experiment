import { Box, Card, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";

export type PanelLayoutProps = {
  header?: ReactNode | string;
  body: ReactNode;
  footer?: ReactNode;
}

export const PanelLayout: FC<PanelLayoutProps> = ({ header, body, footer }) => {
  const theme = useTheme();
  const bgColor = theme.palette.primary.main;
  return (
    <Card className="panel" square>
      <Box>
        <Box className="panel-header">
          {typeof header === 'string' ? 
            <Typography
              variant="h6"
              bgcolor={bgColor}
              component="div"
              sx={{
                py: 1,
                px: 2,
                flexGrow: 1,
                color: theme.palette.getContrastText(bgColor)
              }}
            >
              {header}
            </Typography>
            : header
          }
        </Box>
        <div className="panel-body">
          {body}
        </div>
      </Box>
      <div className="panel-footer">
        {footer}
      </div>
    </Card>
  );
}