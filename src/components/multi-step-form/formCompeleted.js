import { useFormData } from "./context/index";

export default function FormCompleted() {
  const { data } = useFormData();

  return (
    <>
      <h2>End </h2>

      <pre>{JSON.stringify(data)}</pre>
    </>
  );
}
