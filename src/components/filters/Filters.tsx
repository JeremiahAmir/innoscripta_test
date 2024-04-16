const Filters = () => {
  return (
    <>
      <div className="banner-area">
        <div className="container">
          <form className="row g-3">
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className="col-md-4">
              <select className="form-select">
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select">
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div className="col-md-4">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4 col-12 mx-auto">
              <button type="submit" className="btn btn-primary cstm-btn py-2 w-100">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Filters;
