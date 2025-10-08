const Children = ({ children }) => {
  return (
    <>
      <div>
        <p>O conteudo abaixo esta sendo recebido atraves de "Children"</p>
        {children}
      </div>
    </>
  );
};
export default Children;
