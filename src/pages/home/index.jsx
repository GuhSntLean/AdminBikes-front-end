const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h4>Bike's</h4>
                    <p>number</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-bicycle" />
                  </div>
                  <a href="/" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h4>Usuarios</h4>
                    <p>number</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-users" />
                  </div>
                  <a href="/" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-gray">
                  <div className="inner">
                    <h4>Viagens</h4>
                    <p>number</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-road" />
                  </div>
                  <a href="/" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h4>Alarme</h4>
                    <p>number</p>
                  </div>
                  <div className="icon">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <div href="/" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div class="card card-gray direct-chat-gray">
                  <div class="card-header">
                    <h3 class="card-title">Maps actions</h3>
                    <div class="card-tools">
                      <button
                        type="button"
                        class="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="direct-chat-messages"></div>
                  </div>
                  <div class="card-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
