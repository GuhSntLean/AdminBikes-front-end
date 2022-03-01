const NameScreen = (props) => {
  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">{props.nameScreen}</h1>
              <p>{!props.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NameScreen;
