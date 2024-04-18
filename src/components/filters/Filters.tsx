import React, {useEffect, useState} from "react";
import Select, {SingleValue} from "react-select";
import {categories} from "../../data/categories";
import {useNewsOrg} from "../../services/org-news/use-news-org";
import {SourceType} from "../../types/SourceType";
import {toast} from "react-toastify";
import {NewsType} from "../../types/NewsTypes";

type FilterType = {
  initSearch: (q: string) => void
  setParentDate: (date: string) => void
}
const Filters = ({initSearch, setParentDate}: FilterType) => {
  const [sources, setSources] = useState<Awaited<Array<SourceType>>>([])
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState<SingleValue<{label: string, value: string}>>(null)
  const [source, setSource] = useState<SingleValue<{label: string, value: string}>>(null)
  const [date, setDate] = useState('')
  const [news, setNews] = useState<Awaited<Array<NewsType>>>([])

  const {getSources, getNewsOrgs} = useNewsOrg()

  useEffect(() => {
    (async () => {
      const sources: SourceType[] | undefined = await getSources();
      if (sources) {
        setSources(sources);
      }
    })();
  }, []);

  const validate = () => {
    return !!(keyword.length || date.length || category || source)
  }

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please select any field to search.')
      return
    }

    let query = []
    if (keyword && keyword.length) {
      query.push({name: 'q', value: keyword})
    }

    if (category) {
      // @ts-ignore
      query.push({name: 'category', value: category?.value})
    }

    let queryStr = ''
    query.forEach((q: {name: string, value: string}, i: number) => {
      if (q.name === 'sources' || q.name === 'category') {
        queryStr += `${q.name}=${q.value}`
      } else {
        queryStr += `${q.name}=${q.value}`
      }

      if (i >= 0 && i < query.length - 1) {
        queryStr += '&'
      }
    })

    initSearch(queryStr)
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
    setParentDate(e.target.value)
  }

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
      <div className="banner-area">
        <div className="container">
          <form className="row g-3" onSubmit={(e) => handleSearch(e)}>
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Search Keyword" onChange={(e) => setKeyword(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <Select
                  placeholder={'Select Category'}
                  styles={customSelectStyles}
                  closeMenuOnSelect={false}
                  options={categories}
                  onChange={setCategory}
                  value={category}
              />
            </div>
            <div className="col-md-4">
              <Select
                  placeholder={'Select Source'}
                  styles={customSelectStyles}
                  closeMenuOnSelect={false}
                  options={sources}
                  onChange={setSource}
                  value={source}
              />
            </div>
            <div className="col-md-4">
              <input type="date" className="form-control" onChange={(e) => handleDateChange(e)}/>
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
