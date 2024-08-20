import { useForm } from "react-hook-form";
import { useFormData } from "../context/index";
import { H4, StyledForm } from "../formStyle";

export default function ConfirmPurchase({ formStep, nextFormStep }) {
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
    <StyledForm display={formStep === 2 ? "block" : "none"}>
      <H4>Confirm Purchase</H4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              {...register("checkbox", { required: true })}
            />
            Ready to buy?
          </label>
          {errors.checkbox && <p>Confirm purchase to proceed</p>}
        </div>
        <button>Next</button>
      </form>
    </StyledForm>
  );
}
