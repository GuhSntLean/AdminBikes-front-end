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
            <div class="card card-gray direct-chat-gray">
              <div class="card-header">
                <h3 class="card-title">Map actions</h3>
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
                <Map  location={location} zoomLevel={17}/>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapAction;
