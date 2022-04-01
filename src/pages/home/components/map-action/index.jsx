import Map from "../../../../components/map/Map";

let location = {
  text: "Here",
  lat: 37.42216,
  lng: -122.08427,
}

const MapAction = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="card card-gray direct-chat-gray">
              <div className="card-header">
                <h3 className="card-title">Map actions</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <Map  location={location} zoomLevel={17}/>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapAction;
