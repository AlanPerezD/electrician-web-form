import CardForm from "./__components/CardForm";

export default function Home() {
  return (
    <main className="">
      <CardForm
        title = '1. Nombre Completo'
        required
        firstField
        firstFieldPlaceholder="Primer Nombre"
        secondField
        secondFieldPlaceholder="Apellido"
      />
      <CardForm
        title = '2. Correo electronico'
        required
        firstField
        firstFieldIcon="emailIcon"
      />
      <CardForm
        title="3. Numero de contacto"
        required
        firstField
        firstFieldIcon="phoneIcon"
      />
      <CardForm
        title="4. Nombre de la empresa o proyecto"
        required
        firstField
        firstFieldIcon="textIcon"
      />
      <CardForm
        title="5. Descripcion breve de la empresa o proyecto"
        required
        firstField
        firstFieldIcon="textIcon"
      />
      <CardForm
        title="6. ¿Cuál es la vision y misión de la empresa/proyecto?"
        required
        firstField
        firstFieldIcon="linesIcon"
      />
      {/* <CardForm/>
      <CardForm/>
      <CardForm/>
      <CardForm/>
      <CardForm/>
      <CardForm/> */}
    </main>
  );
}
