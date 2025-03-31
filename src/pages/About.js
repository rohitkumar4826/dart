import React from "react";
import { 
  Grid, 
  Typography, 
  Button, 
  Box, 
  Container, 
  Divider,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Paper
} from "@mui/material";
import { LinkedIn, ArrowForward, Timeline, Diversity3, Lightbulb } from "@mui/icons-material";
import { motion } from "framer-motion";
import Navbar from "./../components/Navbar.js";
// Sample images (replace with actual ones)
import founder1 from "../media/image1.jpeg";
import founder2 from "../media/image1.jpeg";
import missionImg from "../media/image1.jpeg";
// import bgPattern from "../media/pattern.png"; // Add a subtle background pattern

const founders = [
  {
    name: "Navdeep",
    role: "Tech Innovator & CEO",
    image: founder1,
    linkedin: "#",
    bio: "Description of CEO"
  },
  {
    name: "Avinash Rai",
    role: "Tech Innovator & CTO",
    image: founder2,
    linkedin: "#",
    bio: "Description of CTO"
  },
];

const values = [
  {
    icon: <Lightbulb fontSize="large" />,
    title: "Innovation",
    description: "We challenge conventional thinking and embrace transformative ideas."
  },
  {
    icon: <Timeline fontSize="large" />,
    title: "Excellence",
    description: "We commit to the highest standards in everything we do."
  },
  {
    icon: <Diversity3 fontSize="large" />,
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives working together."
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <>
    <Navbar/>
    <Box sx={{ 
    //   backgroundImage: `url(${bgPattern})`,
      backgroundRepeat: "repeat",
      backgroundSize: "200px",
      backgroundAttachment: "fixed",
      position: "relative"
    }}>
      {/* Hero Section Overlay */}
      <Box sx={{ 
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        py: { xs: 8, md: 12 },
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1
        }
      }}>
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              fontWeight={800} 
              sx={{ 
                mb: 2,
                background: "linear-gradient(45deg, #fff, #e0e0e0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              DART Council
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}>
              {/* Driving Advancement, Research & Technology */}
            </Typography>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              endIcon={<ArrowForward />}
              sx={{ 
                borderRadius: "50px", 
                px: 4,
                borderWidth: "2px",
                "&:hover": {
                  borderWidth: "2px",
                  backgroundColor: "rgba(255,255,255,0.1)"
                }
              }}
            >
              Our Vision
            </Button>
          </motion.div>
        </Container>
      </Box>
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* 🌟 Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <Paper elevation={3} sx={{ 
            p: { xs: 3, md: 5 }, 
            borderRadius: "16px",
            background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
            mb: 8
          }}>
            <Grid 
              container 
              spacing={4} 
              alignItems="center" 
              sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
            >
              {/* Left: Text Content */}
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h3" 
                  fontWeight={700} 
                  gutterBottom
                  sx={{ 
                    color: theme.palette.primary.main,
                    position: "relative",
                    display: "inline-block",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-8px",
                      left: 0,
                      width: "60px",
                      height: "4px",
                      backgroundColor: theme.palette.secondary.main
                    }
                  }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: "1.1rem", lineHeight: 1.7 }}>
                  The <strong>DART Council</strong> is dedicated to fostering innovation, collaboration, 
                  and excellence in technology, business, and leadership. We empower 
                  professionals and organizations to thrive in an evolving digital landscape through 
                  cutting-edge research, strategic partnerships, and transformative initiatives.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{ 
                    borderRadius: "50px", 
                    py: 1.5, 
                    px: 4,
                    boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)'
                  }}
                >
                  Learn More
                </Button>
              </Grid>
              
              {/* Right: Image */}
              <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ 
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 20,
                    left: 20,
                    width: "100%",
                    height: "100%",
                    border: `3px solid ${theme.palette.primary.main}`,
                    borderRadius: "8px",
                    zIndex: 0
                  }
                }}>
                  <img
                    src={missionImg}
                    alt="DART Mission"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      position: "relative",
                      zIndex: 1
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
        
        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography 
              variant="h4" 
              fontWeight={700} 
              sx={{ 
                mb: 2,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  backgroundColor: theme.palette.secondary.main
                }
              }}
            >
              Our Core Values
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: "700px", mx: "auto" }}>
              These principles guide our decisions and shape our culture
            </Typography>
          </Box>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <Grid container spacing={3} justifyContent="center">
              {values.map((value, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={fadeIn}>
                    <Card sx={{ 
                      height: "100%", 
                      borderRadius: "16px",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }
                    }}>
                      <CardContent sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center",
                        textAlign: "center",
                        p: 4
                      }}>
                        <Box sx={{ 
                          color: theme.palette.primary.main, 
                          mb: 2,
                          p: 1.5,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.light,
                          display: "flex"
                        }}>
                          {value.icon}
                        </Box>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                          {value.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
        
        <Divider sx={{ my: 8 }} />
        
        {/* 🌟 Founders Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography 
              variant="h4" 
              fontWeight={700} 
              sx={{ 
                mb: 2,
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  backgroundColor: theme.palette.secondary.main
                }
              }}
            >
              Meet Our Founders
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, maxWidth: "700px", mx: "auto" }}>
              The visionaries behind the DART Council who combine decades of expertise to drive our mission forward
            </Typography>
          </Box>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Grid container spacing={4} justifyContent="center">
              {founders.map((founder, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div variants={fadeIn}>
                    <Card sx={{ 
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      height: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" }
                    }}>
                      <Box sx={{ 
                        width: { xs: "100%", sm: "40%" },
                        position: "relative",
                        overflow: "hidden"
                      }}>
                        <img 
                          src={founder.image}
                          alt={founder.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center"
                          }}
                        />
                      </Box>
                      <CardContent sx={{ 
                        width: { xs: "100%", sm: "60%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 3
                      }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                          {founder.name}
                        </Typography>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            color: theme.palette.primary.main, 
                            mb: 2,
                            fontWeight: 500
                          }}
                        >
                          {founder.role}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                          {founder.bio}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<LinkedIn />}
                          href={founder.linkedin}
                          target="_blank"
                          sx={{
                            alignSelf: "flex-start",
                            borderRadius: "50px",
                            "&:hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: "#fff"
                            }
                          }}
                        >
                          Connect on LinkedIn
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
        
        <Divider sx={{ my: 8 }} />
        
        {/* 🌟 What's Next Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <Paper elevation={3} sx={{ 
            p: { xs: 4, md: 6 }, 
            borderRadius: "16px",
            backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
            color: "#fff",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "radial-gradient(circle at 20% 90%, rgba(255,255,255,0.1) 0%, transparent 20%)",
            }
          }}>
            <Typography variant="h3" fontWeight={800} gutterBottom>
              What's Next for DART Council?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: "800px", mx: "auto", fontWeight: 400 }}>
              We are expanding our initiatives, launching new programs, and building 
              stronger partnerships to shape the future of technology and leadership.
            </Typography>
            <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    10+
                  </Typography>
                  <Typography variant="body1">
                    New programs launching in 2023
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    5K+
                  </Typography>
                  <Typography variant="body1">
                    Professionals to be empowered
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    25+
                  </Typography>
                  <Typography variant="body1">
                    Global partnerships
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: "#fff",
                color: theme.palette.primary.main,
                borderRadius: "50px",
                py: 1.75,
                px: 4,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)"
                }
              }}
            >
              Join Our Journey
            </Button>
          </Paper>
        </motion.div>
        
        {/* Contact CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h5" fontWeight={500} gutterBottom>
            Have questions or want to learn more?
          </Typography>
          <Button 
            variant="outlined" 
            color="primary"
            sx={{ 
              mt: 2,
              borderRadius: "50px",
              py: 1.2,
              px: 4
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default AboutUs;