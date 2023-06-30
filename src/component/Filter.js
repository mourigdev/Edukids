import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const Filter = ({ handleFilterCriteriaChange, handleFilterCat, handleFilterCity }) => {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [checkedCat, setcheckedCat] = useState("");
  const [checkedcity, setcheckedcity] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionCat, setSelectedOptionCat] = useState('');

  const supabaseUrl = 'https://gfiunwtxvutasehyavex.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXVud3R4dnV0YXNlaHlhdmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzMDMxMTEsImV4cCI6MjAwMDg3OTExMX0.CqCGOZEe7ytAg13zWgkEa-uBtrxB_kEVe67oTedKk7c';
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(()=>{
  
    handleFilterCity(selectedOption);
  },[selectedOption])

  useEffect(()=>{
 
    handleFilterCat(selectedOptionCat);

  },[selectedOptionCat])


  useEffect(() => {
    const fetchCategoriesAndCities = async () => {
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('works')
          .select('category, city');

        if (categoriesError) {
          throw new Error(categoriesError.message);
        }

        const uniqueCategories = [...new Set(categoriesData.map((item) => item.category))];
        const uniqueCities = [...new Set(categoriesData.map((item) => item.city))];

        const categorizedData = uniqueCategories.map((cat) => {
          const count = categoriesData.filter((item) => item.category === cat).length;
          return { name: cat, number: count };
        });

        const cityData = uniqueCities.map((city) => {
          const count = categoriesData.filter((item) => item.city === city).length;
          return { name: city, number: count };
        });

        setCategories(categorizedData);
        setCities(cityData);
      } catch (error) {
        console.error('Error fetching categories and cities:', error);
      }
    };

    fetchCategoriesAndCities();
  }, []);


  const handleChange = (e) => {
    // selectedOptionCat('')

    setcheckedCat('')
    setSelectedOption((before)=>{return before === e.target.value ? '' : e.target.value});
    setcheckedcity((before)=>{return before === e.target.value ? '' : e.target.value});
    console.log(selectedOption)
    console.log(selectedOptionCat)
    
  };

  const handleCatChange = (e) => {
    // selectedOption('')

    setcheckedcity('')
    setSelectedOptionCat((before)=>{return before === e.target.value ? '' : e.target.value});
    setcheckedCat((before)=>{return before === e.target.value ? '' : e.target.value});
    console.log(selectedOptionCat)
    console.log(selectedOption)

  };

  const handleSearch = (event) => {
    handleFilterCriteriaChange(event.target.value);
  };





  return (
    <div className="filter">
      <div className="search">
        <input className="search" onChange={handleSearch} placeholder="Zoeken..." />
      </div>
      <div className="Filter-box">
        <div className="filter-box-header">Filter op categorie</div>
        <div className="filter-box-body">
        {categories.map((category) => (
          <div key={category.name} className="checkbox-container">
            <label className="filter-container">
            {category.name}
            <input
              type="checkbox"
              id={category.name}
              checked={checkedCat === category.name}
              value={category.name}
              onChange={handleCatChange}
            />
            <span className="checkmark"></span>
            </label>
            <p htmlFor={category.name}>({category.number})</p>
          </div>
        ))}
        </div>
      </div>
      <div className="Filter-box">
        <div className="filter-box-header">Filter op locatie</div>
        <div className="filter-box-body">
        {cities.map((city) => (
          <div key={city.name} className="checkbox-container">
            <label className="filter-container">
            {city.name}
            <input
              type="checkbox"
              id={city.name}
              value={city.name}
              checked={checkedcity === city.name}
              onChange={handleChange}
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
