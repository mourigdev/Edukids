import React, { useState } from 'react';

const Filter = ({ handleFilterCriteriaChange, handleFilterCat, handleFilterCity }) => {
  const cate = [
    {
      id: 1,
      name: 'Engels',
      number: 2,
      city: 'Utrecht'
    },
    {
      id: 2,
      name: 'Natuurkunde',
      number: 1,
      city: 'Utrecht'
    },
    {
      id: 3,
      name: 'Nederlands',
      number: 1,
      city: 'Utrecht'
    },
    {
      id: 4,
      name: 'Algemeen Vormend Onderwijs (AVO)',
      number: 1,
      city: 'Oost-Brabant'
    },
    {
      id: 5,
      name: 'Techniek',
      number: 1,
      city: 'Limburg'
    }
  ];

  const citis = [
    {
      id: 1,
      name: 'Oost-Brabant',
      number: 1,
      cat: [4]
    },
    {
      id: 2,
      name: 'Limburg',
      number: 1,
      cat: [5]
    },
    {
      id: 3,
      name: 'Utrecht',
      number: 4,
      cat: [1, 2, 3]
    }
  ];

  const [categories, setCategories] = useState(cate);
  const [cities, setCities] = useState(citis);
  const [selectedOptions, setSelectedOptions] = useState({
    city: '',
    category: ''
  });

  const handleSearch = (event) => {
    handleFilterCriteriaChange(event.target.value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      city: prevOptions.city === value ? '' : value
    }));
  };

  const handleCatChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      category: prevOptions.category === value ? '' : value
    }));
  };

  // Apply filters based on selected options
  React.useEffect(() => {
    const filteredCategories = cate.filter((cat) => {
      return (
        selectedOptions.city === '' ||
        (selectedOptions.city !== '' && cat.city === selectedOptions.city)
      );
    });

    const filteredCities = citis.filter((city) => {
      return (
        selectedOptions.category === '' ||
        (selectedOptions.category !== '' && city.cat.includes(parseInt(selectedOptions.category)))
      );
    });

    setCategories(filteredCategories);
    handleFilterCat(filteredCategories)
    setCities(filteredCities);
    handleFilterCity(filteredCities);
  }, [selectedOptions]);

  return (
    <div className="filter">
      <div className="search">
        <input className="search" onChange={handleSearch} placeholder="Zoeken..." />
      </div>
      <div className="Filter-box">
        <div className="filter-box-header">Filter op categorie</div>
        <div className="filter-box-body">
          {categories.map((cat, index) => (
            <div key={index} className="checkbox-container">
              <label className="filter-container">
                {cat.name}
                <input
                  onChange={handleCatChange}
                  checked={selectedOptions.category === String(cat.id)}
                  type="checkbox"
                  value={cat.id}
                />
                <span className="checkmark"></span>
              </label>
              <p>({cat.number})</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Filter-box">
        <div className="filter-box-header">Filter op locatie</div>
        <div className="filter-box-body">
          {cities.map((city, index) => (
            <div key={index} className="checkbox-container">
              <label className="filter-container">
                {city.name}
                <input
                  onChange={handleChange}
                  type="checkbox"
                  checked={selectedOptions.city === city.name}
                  value={city.name}
                />
                <span className="checkmark"></span>
              </label>
              <p>({city.number})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
