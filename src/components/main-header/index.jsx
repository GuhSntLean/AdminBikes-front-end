const MainHeader = () => {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/" role="button">
              <i className="fas fa-arrows-alt-h"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-header">15 Notifications</span>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                <i className="fas fa-envelope mr-2"></i> 4 new messages
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                <i className="fas fa-file mr-2"></i> 3 new reports
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="fas fa-bars"></i>
            </a>
            <div className="dropdown-menu dropdown-menu dropdown-menu-right">  
              <a href="/" className="dropdown-item">
                <i class="fas fa-cogs mr-2"></i> Configurações
              </a>
              <div className="dropdown-divider"></div>
              <a href="/" className="dropdown-item">
                <i class="fas fa-sign-out-alt mr-2"></i> Sair
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainHeader;
