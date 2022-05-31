import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Address
      </Typography>
  

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="contactNumber"
            name="contactNumber"
            label="Contact Number"
            fullWidth
            autoComplete="contact-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="street"
            name="street"
            label="Street"
            fullWidth
            autoComplete="street"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="city"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="state"
            name="state"
            label="State"
            fullWidth
            autoComplete="state"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="landmark"
            name="landmark"
            label="Landmark"
            fullWidth
            autoComplete="landmark"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            fullWidth
            autoComplete="zipCode"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary">
              Save Address
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}