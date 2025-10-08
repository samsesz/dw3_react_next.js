const Description = (props) => {
  // Props (propriedades do componente)
  // props é um objeto {} possui chaves e valores
  // Ex: props.city = "Registro"
  return (
    <>
      <div>
        <p>Cidade: {props.city}</p>
        <p>Idade: {props.age} anos</p>
        <p>E-mail: {props.email}</p>
      </div>
    </>
  );
};

export default Description;