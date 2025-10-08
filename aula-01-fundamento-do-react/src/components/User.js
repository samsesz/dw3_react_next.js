// Expressões JavaScript dentro do HTML
const User = () => {
  // Criando variáveis para o componente
  const name = "Samia Muniz";
  return (
    <>
        {/*Esse é p comentário em JSX - CTRL ; */}
      <div>Usuário logado: <strong>{name}</strong></div>
      
    </>
  );
};

export default User;