function Avtaar(props) {
  const { name, src, rounded } = props;
  const styles = {
    borderRadius: rounded ? "50%" : "16px",
    marginTop: "10px"
  };

  return (
    <>
      <img src={src} alt="" style={styles} width="400px" />
      <h1 style={{ color: "red" }}>{name}</h1>
    </>
  );
}
export default Avtaar;
