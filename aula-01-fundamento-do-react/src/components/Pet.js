const Pet = ({ name, breed, age }) => {
  // Desestruturação de props:
  // Desestructuring => props.name -> {name}
  return (
    <>
      <div>
        Informações do Pet:
        <ul>
          <li>Nome: {name}</li>
          <li>Raça: {breed}</li>
          <li>Idade: {age} anos</li>
        </ul>
      </div>
    </>
  );
};
export default Pet;