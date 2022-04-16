const InformationCard = () => {
  return (
    <>
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
              {/* <a href="/" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a> */}
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
              {/* <a href="/" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a> */}
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
              {/* <a href="/" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </a> */}
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
              {/* <div href="/" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationCard
