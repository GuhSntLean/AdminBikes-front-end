import { useState } from "react";
import LogoSystem from "../../assets/Logo/LogoSystem.png";

const LoginPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const handleClose = () => setShowDialog(false);
  const handleOpen = () => setShowDialog(true);
  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card">
            <div className="card-header text-center text-white bg-secondary mb-3 ">
              <a href="/" className="h4">
                <img
                  src={LogoSystem}
                  alt="BikeIoT"
                  className="brand-image m-2"
                />
                Gerenciador <b>BikeIot</b>
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Faça login para iniciar sua sessão</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username ou Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-users"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label for="remember"> Lembrar ?</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Entrar
                    </button>
                  </div>
                </div>
              </form>
              <p className="mb-1">
                <a href="forgot-password.html">Esqueceu a senha ?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
