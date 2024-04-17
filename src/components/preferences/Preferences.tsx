import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { useNewsOrg } from "../../services/news-org/use-news-org";
// import { SourceType, SourceModel } from "../../types/NewsOrg/NewsOrg";
import { SourceModel } from "../../types/NewsOrg/NewsOrg";
import { categories } from "../../data/categories";
// import { CategoryType } from "../../types/CategoryType";
import { authors } from "../../data/authors";
// import { AuthorType } from "../../types/AuthorType";
import { ToastContainer, toast } from "react-toastify";
import {
  getPreference,
  setPreference,
} from "../../services/news-org/preferences/preferences";
import { Col } from "reactstrap";

const Preferences = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sources, setSources] = useState<Awaited<Array<SourceModel>>>([]);
  const [selectedCategories, setSelectedCategories] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(getPreference("categories"));
  const [selectedAuthors, setSelectedAuthors] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(getPreference("authors"));
  const [selectedSources, setSelectedSources] = useState<MultiValue<{
    value: string;
    label: string;
  }> | null>(getPreference("sources"));

  const { getSources } = useNewsOrg();

  useEffect(() => {
    (async () => {
      const sources: SourceModel[] | undefined = await getSources();
      if (sources) {
        setSources(sources);
      }
    })();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPreference("categories", selectedCategories);
    setPreference("authors", selectedAuthors);
    setPreference("sources", selectedSources);
    toast.success("Preferences Updated!");
  };
  const customSelectStyles = {
    option: (styles: any) => {
      return {
        ...styles,
        color: "#000",
      };
    },
  };
  return (
    <>
      <ToastContainer theme="dark" newestOnTop />
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
          <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
            <Col md={12}>
              <label className="mb-2 fw-bold">Select Categories</label>
              <Select
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                isMulti
                options={categories}
                onChange={setSelectedCategories}
                value={selectedCategories}
              />
            </Col>
            <Col md={12}>
              <label className="mb-2 fw-bold">Select Sources</label>
              <Select
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                isMulti
                options={sources}
                onChange={setSelectedSources}
                value={selectedSources}
              />
            </Col>
            <Col md={12}>
              <label className="mb-2 fw-bold">Select Authors</label>
              <Select
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                isMulti
                options={authors}
                onChange={setSelectedAuthors}
                value={selectedAuthors}
              />
            </Col>
            <Col md={4} className="col-12 mx-auto">
              <button className="btn btn-primary cstm-btn w-100">Update</button>
            </Col>
          </form>
        </div>
      </aside>
    </>
  );
};
export default Preferences;
