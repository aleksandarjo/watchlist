import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ children, onClick }) => {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>{children}</button>;
};

export default LinkButton;
