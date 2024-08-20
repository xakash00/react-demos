import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import FormProvider from "./context";
import FormCard from "./formCard";
import FormCompleted from "./formCompeleted";
import { H2 } from "./formStyle";
import PersonalInfo from "./forms/PersonalInfo";
import BillingInfo from "./forms/BillingInfo";
import ConfirmPurchase from "./forms/ConfirmPurchase";
const MultiStepForm = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <Container>
      <h1>Renders: {renderCounter.current}</h1>
      <FormProvider>
        <div>
          <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
              <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <ConfirmPurchase
                formStep={formStep}
                nextFormStep={nextFormStep}
              />
            )}

            {formStep > 2 && <FormCompleted />}
          </FormCard>
        </div>
        {console.log("v")}
      </FormProvider>
    </Container>
  );
};

export default MultiStepForm;
