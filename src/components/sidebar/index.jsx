import LogoSystem from "../../assets/Logo/LogoSystem.png";
import NameSystem from "../../assets/Logo/NameSystem.png";
const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
          <img src={LogoSystem} alt="BikeIoT" className="brand-image m-2" />
          <img src={NameSystem} alt="BikeIoT" className="brand-text m-2" />
        </a>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              class="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-user"></i>
                  <p>
                    Usuarios
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Active Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inactive Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-bicycle"></i>
                  <p>
                    Bike
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Active Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inactive Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item menu-open">
                <a href="/" className="nav-link active">
                  <i className="nav-icon fas fa-address-card"></i>
                  <p>
                    Administrador
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Active Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inactive Page</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
