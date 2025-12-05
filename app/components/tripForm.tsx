

import { Form } from "next/form";

export default function TripForm() {

function handleSubmit(formData: FormData) {
    const name = formData.get("name") as string;
    console.log("Recebido no servidor:", name);
}

  return (
    <Form action={handleSubmit}>
      <input name="name" placeholder="Nome da viagem" />
      <button type="submit">Enviar</button>
    </Form>
  );
}