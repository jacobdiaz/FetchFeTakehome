import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  const showAlert3s = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  useEffect(() => showAlert3s(), []);

  return (
    <div>
      <LoginForm showAlert3s={showAlert3s} setAlertData={setAlertData} />
      {showAlert && <Alert data={alertData} />}
    </div>
  );
};

export default Login;
