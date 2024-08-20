import { useForm } from "react-hook-form";
import { useFormData } from "../context/index";
import { FormInput, H4, Label, StyledForm } from "../formStyle";

export default function PersonalInfo({ formStep, nextFormStep }) {
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
    <StyledForm display={formStep === 0 ? "block" : "none"}>
      <H4>Personal Info</H4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="email">Email</Label>
          <FormInput
            type="email"
            id="email"
            {...register("email", {
              required: true
            })}
          />
          {errors.email && <p>Email is required</p>}
        </div>
        <button type="submit">Next</button>
      </form>
    </StyledForm>
  );
}
