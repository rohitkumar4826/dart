import { useRef, useState } from "react";
import { Box, Typography, Switch, Container, Grid, Button, Paper } from "@mui/material";
import Footer from "./Footer.js";
export default function MainPricing() {
  const [checked, setChecked] = useState(false);
  const inputEl = useRef(null);

  function handleToggle(e) {
    if (e.code === "Enter") setChecked(!checked);
  }

  return (
    <>
    <Box sx={{ backgroundColor: "hsl(240, 78%, 98%)", minHeight: "100vh", position: "relative" }}>
      {/* Background Images */}
      <Container
        sx={{
          position: "relative",
          maxWidth: "1200px",
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          minHeight: { xl: "100vh" },
          justifyContent: { xl: "center" },
          zIndex: 20,
        }}
      >
        {/* Header */}
        <Typography variant="h3" color="hsl(233, 13%, 49%)" gutterBottom>
          Our Pricing
        </Typography>

        {/* Toggle Switch */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center", mb: 2 }}>
          <Typography color="hsl(234, 14%, 74%)">Annually</Typography>
          <Switch
            checked={checked}
            onChange={() => setChecked(!checked)}
            inputRef={inputEl}
            onKeyPress={handleToggle}
          />
          <Typography color="hsl(234, 14%, 74%)">Monthly</Typography>
        </Box>
        <Typography fontSize="1.2rem" color="hsl(234, 14%, 74%)">
          Press Enter to change billing
        </Typography>

        {/* Pricing Cards */}
        <Grid container spacing={5} mt={5} sx={{ justifyContent: "center", alignItems: "center" }}>
          {/** Basic Plan **/}
          <Grid item xs={12} md={6} xl={4}>
            <PricingCard
              title="Prep Lite"
              price={checked ? "199.99" : "19.99"}
              features={["Feature1", "Feature2", "Feature3"]}
              gradient={false}
            />
          </Grid>

          {/** Professional Plan **/}
          <Grid item xs={12} md={6} xl={4}>
            <PricingCard
              title="Prep Explore"
              price={checked ? "249.99" : "24.99"}
              features={["Feature1", "Feature2", "Feature3"]}
              gradient={true}
            />
          </Grid>

          {/** Master Plan **/}
          <Grid item xs={12} md={6} xl={4}>
            <PricingCard
              title="DART Pro"
              price={checked ? "399.99" : "39.99"}
              features={["Feature1", "Feature2", "Feature3"]}
              gradient={false}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer/>
    </>
  );
}

/* Pricing Card Component */
function PricingCard({ title, price, features, gradient }) {
  return (
    <Paper
      elevation={3}
      sx={{
        background: gradient
          ? "linear-gradient(to bottom, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
          : "#fff",
        color: gradient ? "hsl(240, 78%, 98%)" : "hsl(233, 13%, 49%)",
        p: 3,
        textAlign: "center",
        borderRadius: "12px",
        maxWidth: 360,
        mx: "auto",
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="h3" fontWeight="bold" mt={2}>
        <span style={{ fontSize: "1.6rem" }}>$</span>
        {price}
      </Typography>

      {/* Features List */}
      <Box sx={{ borderTop: "1px solid hsl(234, 14%, 74%)", mt: 2, pt: 2 }}>
        {features.map((feature, index) => (
          <Typography key={index} sx={{ py: 1, borderBottom: "1px solid hsl(234, 14%, 74%)" }}>
            {feature}
          </Typography>
        ))}
      </Box>

      {/* Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          py: 1.2,
          fontWeight: "bold",
          textTransform: "uppercase",
          background: gradient
            ? "hsl(240, 78%, 98%)"
            : "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))",
          color: gradient ? "hsl(237, 63%, 64%)" : "white",
          "&:hover": {
            background: gradient ? "hsl(237, 63%, 64%)" : "white",
            color: gradient ? "white" : "hsl(237, 63%, 64%)",
            border: "1px solid hsl(237, 63%, 64%)",
          },
        }}
      >
        Subscribe
      </Button>
    </Paper>
  );
}
