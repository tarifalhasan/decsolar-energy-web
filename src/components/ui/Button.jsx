const Button = ({ name, type }) => (
  <button className="btn-primary " type={type ? type : 'button'}>
    {name}
  </button>
);
export default Button;
