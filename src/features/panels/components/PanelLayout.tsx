import { Close } from "@mui/icons-material";
import { Box, Card, IconButton, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { usePanels } from "../contexts";

import './PanelLayout.css';

export type PanelLayoutProps = {
  panelId: string;
  header?: ReactNode | string;
  body: ReactNode;
  footer?: ReactNode;
}

export const PanelLayout: FC<PanelLayoutProps> = ({ header, body, footer, panelId }) => {
  const theme = useTheme();
  const { removePanel } = usePanels();
  const bgColor = theme.palette.primary.main;
  return (
    <Card className="panel" square>
      <Box>
        <Box
          className="panel-header"
          display="flex"
          justifyContent="space-between"
          bgcolor={bgColor}
        >
          {typeof header === 'string' ? 
            <Typography
              variant="h6"
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
          <IconButton onClick={() => removePanel(panelId)}>
            <Close sx={{ fill: theme.palette.getContrastText(bgColor) }} />
          </IconButton>
        </Box>
        <Box className="panel-body">
          {body}
        </Box>
      </Box>
      <Box className="panel-footer">
        {footer}
      </Box>
    </Card>
  );
}