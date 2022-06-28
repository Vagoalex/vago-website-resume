const ErrorMessage = () => {
  const stylesText = {
    position: 'absolute',
    left: '50%',
    bottom: '0%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 700,
    textTransform: 'uppercase',
    background: '#000',
    width: '50%',
    borderRadius: '14px',
    padding: '5px 0px',
  };

  const stylesImg = {
    margin: '0 auto',
    background: 'none',
    display: 'block',
    objectFit: 'none',
    border: '10px solid #000',
    boxShadow: '15px 15px 20px rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '180px',
  };

  return (
    <>
      <p style={stylesText}>
        Oops!
        <br />
        Please, update your page :)
      </p>
      <img style={stylesImg} src='https://i.gifer.com/fy3e.gif' alt='error' />
    </>
  );
};
export default ErrorMessage;
