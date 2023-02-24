import { useState } from "react";
import Alert from "../components/Alert";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState<number>();

  const showAlert3s = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
      <LoginForm showAlert3s={showAlert3s} setAlertStatus={setAlertStatus} />
      {showAlert && <Alert status={alertStatus} />}
    </div>
  );
};

export default Login;
