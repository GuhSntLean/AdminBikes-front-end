const TableTravel = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div class="card card-warning direct-chat-warning">
              <div class="card-header">
                <h3 class="card-title">Table travel</h3>
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

export default TableTravel;
