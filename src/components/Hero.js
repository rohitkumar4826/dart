// * Components
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

// * Images
import HeroImg from "../media/hero_illustration.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomHeroBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000336",
  fontWeight: "bold",
  lineHeight: "1.2",
  margin: theme.spacing(4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        paddingBottom: 4,
      }}
    >
      <Container>
        <Navbar />

        <CustomHeroBox>
          {/* Left Section (Text Content) */}
          <Box sx={{ flex: 1, maxWidth: "600px" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 6,
                mb: 2,
              }}
            >
              Welcome to DART's Council
            </Typography>

            <Title variant="h2">
              Discover a job where you'll love to see yourself.
            </Title>

            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                lineHeight: "1.6",
                mb: 4,
              }}
            >
              Be the first to get the best job opportunities before they hit the
              mass market! Hot career openings with one simple search!
            </Typography>

            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn
            />
          </Box>

          {/* Right Section (Image) */}
          <Box
            sx={{
              flex: 1.2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={HeroImg}
              alt="hero illustration"
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </Box>
        </CustomHeroBox>
      </Container>
    </Box>
  );
}
