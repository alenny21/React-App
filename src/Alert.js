// Prop has to be named children
function Alert({ children }) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Alert;
