import { useState } from "react";

const Preferences = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <aside className={`sidebar ${isVisible ? "active" : ""}`}>
        <div className="custom-menu">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
            onClick={() => setIsVisible(!isVisible)}
          >
            <i className="fa fa-cog" aria-hidden="true"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <form className="row g-3">
            <div className="col-md-12">
              <label className="mb-2 fw-bold">Select Categories</label>
              <select className="form-select">
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="mb-2 fw-bold">Select Sources</label>
              <select className="form-select">
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="mb-2 fw-bold">Select Authors</label>
              <select className="form-select">
                <option>Option</option>
                <option>Option</option>
              </select>
            </div>
            <div className="col-md-4 col-12 mx-auto">
              <button className="btn btn-primary cstm-btn w-100">Update</button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
};
export default Preferences;
