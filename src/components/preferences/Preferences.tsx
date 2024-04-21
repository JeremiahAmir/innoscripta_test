import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { Button, Col, Form, Label } from "reactstrap";
import { authors } from "../../data/authors";
import { categories } from "../../data/categories";
import { useNewsOrg } from "../../hooks/org-news/use-news-org";
import { getPreference, setPreference } from "../../hooks/preferences/preferences";
import { SourceType } from "../../types/SourceType";

const Preferences = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sources, setSources] = useState<Awaited<Array<SourceType>>>([]);
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
      const sources: SourceType[] | undefined = await getSources();
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
    setTimeout(() => window.location.reload(), 1500);
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
          <Button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
            onClick={() => setIsVisible(!isVisible)}
          >
            <i className="fa fa-cog" aria-hidden="true"></i>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
        <div className="d-flex justify-content-between flex-wrap">
          <Form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
            <Col md={12}>
              <Label className="mb-2 fw-bold">Select Categories</Label>
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
              <Label className="mb-2 fw-bold">Select Sources</Label>
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
              <Label className="mb-2 fw-bold">Select Authors</Label>
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
              <Button className="btn btn-primary cstm-btn w-100">Update</Button>
            </Col>
          </Form>
        </div>
      </aside>
    </>
  );
};
export default Preferences;
