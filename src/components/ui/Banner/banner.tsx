import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";

interface BannerProps {
  title: string;
  buttonText?: string;
  buttonHref?: string;
}

const Banner: FC<BannerProps> = ({ buttonText, buttonHref, title }) => {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    buttonHref && router.push(buttonHref);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={10} sm={10} lg={10}>
          <Typography variant="h6" sx={{ color: "common.white" }}>
            {title}
          </Typography>
        </Grid>
        {buttonText && buttonHref && (
          <Grid item xs={2} sm={2} lg={2}>
            <Box display="flex" justifyContent="end" height={1}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white !important",
                  color: "primary.main",
                  textAlign: "center",
                }}
                onClick={handleClick}
                href={buttonHref}
              >
                {buttonText}
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default Banner;
