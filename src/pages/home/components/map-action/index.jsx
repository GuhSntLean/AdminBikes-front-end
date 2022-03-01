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
                <div class="direct-chat-messages"></div>
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
