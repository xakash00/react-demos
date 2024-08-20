import { useForm } from "react-hook-form";
import { useFormData } from "../context/index";
import { FormInput, H4, StyledForm } from "../formStyle";

export default function BillingInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({ mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <StyledForm display={formStep === 1 ? "block" : "none"}>
      <H4>Billing Info</H4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="address">Address</label>
          <FormInput
            type="address"
            id="address"
            {...register("address", { required: true })}
          />
          {errors.address && <p>Shipping address is required</p>}
        </div>
        <button>Next</button>
      </form>
    </StyledForm>
  );
}
