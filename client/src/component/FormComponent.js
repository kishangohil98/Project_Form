import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import "../css/form.css";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { postData } from "../postdata/postdata";

const FormComponent = () => {
  const [formData, setFormData] = React.useState({
    timeframe: "2-3 months",
    name: "",
    company: "",
    email: "",
    budget: "",
    details: "",
    pro_type: [],
  });

  function handleCheck(checkedName) {
    const newNames = formData.pro_type?.includes(checkedName)
      ? formData.pro_type?.filter((name) => name !== checkedName)
      : [...(formData.pro_type ?? []), checkedName];
    setFormData({ ...formData, pro_type: newNames });
    return newNames;
  }

  const handleChangeText = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    console.log("component submit called");
    postData(formData);
  };

  const {
    timeframe,
    name,
    company,
    email,
    budget,
    details,

    pro_type,
  } = formData;

  return (
    <Fragment>
      <div className="main_background">
        <Container fluid="true">
          <h1 className="text-center pt-5 pb-5">Let's create your Project!</h1>
          <ValidatorForm onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={12} lg={3}>
                <div>
                  <FormControl component="fieldset">
                    <h4>Timeframe</h4>
                    <RadioGroup
                      aria-label="gender"
                      name="timeframe"
                      onChange={handleChangeText}
                      value={timeframe}>
                      <FormControlLabel
                        value="1 month"
                        control={<Radio color="primary" />}
                        label="1 month"
                      />
                      <FormControlLabel
                        value="2-3 months"
                        control={<Radio color="primary" />}
                        label="2-3 months"
                      />
                      <FormControlLabel
                        value="4+ months"
                        control={<Radio color="primary" />}
                        label="4+ months"
                      />
                    </RadioGroup>
                  </FormControl>

                  <h4 className="mt-3">Project type</h4>
                  <FormGroup>
                    <FormControl>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            checked={pro_type.includes("desktop")}
                            name="desktop"
                            onChange={() => handleCheck("desktop")}
                          />
                        }
                        label="Desktop"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            checked={pro_type.includes("web")}
                            name="web"
                            onChange={() => handleCheck("web")}
                          />
                        }
                        label="Web"
                      />

                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            checked={pro_type.includes("mobile")}
                            name="mobile"
                            onChange={() => handleCheck("mobile")}
                          />
                        }
                        label="Mobile"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            checked={pro_type.includes("other")}
                            name="other"
                            onChange={() => handleCheck("other")}
                          />
                        }
                        label="Other"
                      />
                    </FormControl>
                  </FormGroup>
                </div>
              </Grid>
              <Grid item sm={12} lg={5}>
                <div>
                  <h3 className="mb-4">Personal Details</h3>
                  <TextValidator
                    id="filled-secondary"
                    label="Name"
                    value={name}
                    name="name"
                    variant="filled"
                    color="primary"
                    className="pb-3"
                    fullWidth="true"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    onChange={handleChangeText}
                  />
                  <TextValidator
                    id="filled-secondary"
                    label="Company"
                    value={company}
                    name="company"
                    variant="filled"
                    color="primary"
                    className="pb-3"
                    fullWidth="true"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    onChange={handleChangeText}
                  />
                  <TextValidator
                    id="filled-secondary"
                    label="Email"
                    value={email}
                    name="email"
                    variant="filled"
                    color="primary"
                    className="pb-3"
                    fullWidth="true"
                    onChange={handleChangeText}
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                  />
                  <TextValidator
                    id="filled-secondary"
                    label="Budget"
                    name="budget"
                    value={budget}
                    variant="filled"
                    color="primary"
                    className="pb-3"
                    fullWidth="true"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    onChange={handleChangeText}
                  />
                </div>
              </Grid>
              <Grid item sm={12} lg={4}>
                <div>
                  <h4 className="mb-4">Tell us about your Project</h4>
                  <TextValidator
                    id="filled-multiline-static"
                    label="About your Project"
                    placeholder="This project is regarding.."
                    multiline
                    value={details}
                    name="details"
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                    rows={13}
                    fullWidth="true"
                    variant="filled"
                    onChange={handleChangeText}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center">
              <Button type="submit" variant="contained" color="primary">
                Send Inquiry
              </Button>
            </Grid>
          </ValidatorForm>
        </Container>
      </div>
    </Fragment>
  );
};

export default FormComponent;
