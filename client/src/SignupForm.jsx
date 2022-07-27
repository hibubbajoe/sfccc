import * as React from "react";
import {
  Box,
  Dialog,
  DialogContentText,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
} from "@mui/material/";
import { googleSheetsUrl } from "./consants";
import SfcccLogo from "./images/sfcccLogo.png";
import AppleStoreBadge from "./AppleStoreBadge";
import GoogleStoreBadge from "./GoogleStoreBadge";

const SignupForm = ({ showSignupForm, setShowSignupForm }) => {
  const formData = new FormData();

  const [signupInformation, setSignupInformation] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phoneNumber, email } = signupInformation;

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);

    fetch(googleSheetsUrl, {
      method: "POST",
      body: formData,
    }).then(() => {
      console.log("Success!");
    });

    setShowConfirmation(true);
  };

  const handleOnChange = (e) => {
    setSignupInformation({
      ...signupInformation,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Dialog open={showSignupForm} onClose={() => setShowSignupForm(false)}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid>
            <img src={SfcccLogo} width="150px" alt="sfccc-logo" />
          </Grid>
          {!showConfirmation ? (
            <>
              <Typography component="h1" variant="h5">
                Signa up dig här!
              </Typography>
              <Box
                component="form"
                id="myForm"
                method="POST"
                action="https://script.google.com/macros/s/AKfycbwSbchrwTUIKbXfKYwpC6KyRjx8SyEVXEpx8dcei8DLV0yvse_7pocG9zZZ7r2bO2Tz0Q/exec"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      name="firstName"
                      placeholder="firstName"
                      id="firstName"
                      variant="outlined"
                      label="Förnamn"
                      type="text"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      placeholder="lastName"
                      name="lastName"
                      id="lastName"
                      label="Efternamn"
                      type="text"
                      variant="outlined"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      placeholder="email"
                      id="email"
                      name="email"
                      label="Epost"
                      type="email"
                      variant="outlined"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      placeholder="phoneNumber"
                      name="phoneNumber"
                      id="phoneNumber"
                      label="Telefonnummer"
                      type="text"
                      variant="outlined"
                      onChange={(e) => handleOnChange(e)}
                    />
                  </Grid>
                  <Grid item xs={12} marginBottom="16px">
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" />}
                      label={
                        <Typography sx={{ fontSize: "12px" }}>
                          Vi kommer bara använda din data för det syfte det är
                          insamlat för och som du härmed godkänner.
                        </Typography>
                      }
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Button
                    item
                    variant="outlined"
                    color="inherit"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => setShowSignupForm(false)}
                  >
                    Gå tillbaka
                  </Button>
                  <Button
                    item
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Skriv upp dig
                  </Button>
                </Grid>
              </Box>
            </>
          ) : (
            <Box>
              <Typography component="h1" variant="h5" mt={3} textAlign="center">
                Kul att du vill vara med!
              </Typography>
              <DialogContentText
                sx={{
                  margin: "16px 0",
                  fontSize: "12px",
                }}
              >
                Vi kommer höra av oss på mail när det börjar närma sig showtime
                🤩
              </DialogContentText>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  Glöm inte att ladda ner Companion Appen
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    gridGap: "8px",
                  }}
                >
                  <AppleStoreBadge />
                  <GoogleStoreBadge />
                </div>
              </div>
            </Box>
          )}
        </Box>
      </Container>
    </Dialog>
  );
};

export default SignupForm;
