import * as React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import CartPaper from "../cart/CartPaper";
import Personal from "../resumes/forms/Personal";
import toast from "react-hot-toast";
import TitleText from "../../ui/sharedComponents/TitleText";

const steps = ["Thông tin đơn hàng", "Thông tin cá nhân"];

function displayStepContent(step) {
  switch (step) {
    case 0:
      return <CartPaper />;

    case 1:
      return <Personal />;
  }
}

function PaymentStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleComplete = () => {
    toast.success("Đã đặt hàng thành công");
    navigate("/");
  };

  return (
    <Box sx={{ width: "60%", mt: "4rem", margin: "0 auto" }}>
      <TitleText variant="h4">💳 Payment</TitleText>

      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Quay lại
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep < steps.length - 1 && (
              <Button onClick={handleNext}>Tiếp theo</Button>
            )}

            {activeStep === steps.length - 1 && (
              <Button onClick={handleComplete}>Hoàn tất</Button>
            )}
          </Box>
        </>
      )}

      <Box sx={{ my: "2rem" }}>{displayStepContent(activeStep)}</Box>
    </Box>
  );
}

export default PaymentStepper;
