import React, { useState,useEffect } from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Filter from '../component/Filter'
import Content from '../component/Content'
import { createClient } from '@supabase/supabase-js';


const Werkenbij = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // const originalContent = [
  //   {
  //     id: 1,
  //     city: 'Utrecht',
  //     text: "Wij zijn edukids, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een tijdelijke EN reguliere Docent Engels (ca. 0,80 fte). De school…",
  //     header: "Docent Engels Tijdelijk EN Regulier",
  //     cat: 'Engels'
  //   },
  //   {
  //     id: 2,
  //     city: 'Oost-Brabant',
  //     text: "Wij zijn edukids, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Leraar AVO (ca. 1,0 fte). De school is gevestigd…",
  //     header: "Leraar AVO",
  //     cat: 'Algemeen Vormend Onderwijs (AVO)'
  //     },
  //     {
  //     id: 3,
  //     city: 'Utrecht',
  //     text: "Wij zijn edukids, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Engels (ca. 1,0 fte). De school is gevestigd…",
  //     header: "Docent Engels",
  //     cat: 'Engels'
  //     },
  //     {
  //     id: 4,
  //     city: 'Utrecht',
  //     text: "Wij zijn edukids, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Natuurkunde (ca. 0,60 fte). De school is gevestigd…",
  //     header: "Docent Natuurkunde",
  //     cat: 'Natuurkunde'
  //     },
  //     {
  //     id: 5,
  //     city: 'Utrecht',
  //     text: "Wij zijn edukids, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Docent Nederlands (ca. 1,0 fte). De school is gevestigd…",
  //     header: "Docent Nederlands",
  //     cat: 'Nederlands'
  //     },
  //     {
  //     id: 6,
  //     city: 'Limburg',
  //     text: "Wij zijn edukids, wij leveren personeelsdiensten voor het onderwijs. Voor één van onze scholen zijn wij momenteel op zoek naar een Praktijkbegeleider Metaaltechniek (ca. 0,40 fte). De school is gevestigd…",
  //     header: "Praktijkbegeleider Metaaltechniek",
  //     cat: 'Techniek'
  //     },

  //   ];

  const supabaseUrl = 'https://gfiunwtxvutasehyavex.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXVud3R4dnV0YXNlaHlhdmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUzMDMxMTEsImV4cCI6MjAwMDg3OTExMX0.CqCGOZEe7ytAg13zWgkEa-uBtrxB_kEVe67oTedKk7c';
  const supabase = createClient(supabaseUrl, supabaseKey);
  const [originalContent, setOriginalContent] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [content, setContent] = useState(originalContent);


  useEffect(() => {
    const fetchOriginalContent = async () => {
      try {
        const { data, error } = await supabase.from('works').select('*');
        setContent(data)
        console.log(data);
        if (error) {
          throw new Error(error.message);
        }
  
        setOriginalContent(data);
      } catch (error) {
        console.error('Error fetching original content:', error);
      }
    };
  
    fetchOriginalContent();
  }, []); // Add an empty dependency array here
  


    const handleFilterCriteriaChange = criteria => {

      setFilterCriteria(criteria);
      setContent(originalContent.filter(item => item.title.toLowerCase().includes(criteria.toLowerCase())));
    };

    const handleFilterCity = City => {
      console.log(City)
      setContent(originalContent.filter(item => item.city.toLowerCase().includes(City.toLowerCase())));
    }

    const handleFilterCat = cat => {
      console.log(cat)
      setContent(originalContent.filter(item => item.category.toLowerCase().includes(cat.toLowerCase())));
    }
  return (
    <div>
        <Header></Header>
        <Hero bg="hero pregnant" video={false} buttons={false} header_second="ONZE ONDERWIJSBANEN" header="Samen voor het onderwijs" text="Hieronder zie je een overzicht van onze onderwijsbanen. Solliciteer direct op de vacature waar je enthousiast over bent of stuur een open sollicitatie!"></Hero>
        <div className='gridfilter'>
          <div className='search-filter'>
            <Filter handleFilterCat={handleFilterCat}  handleFilterCriteriaChange={handleFilterCriteriaChange} handleFilterCity={handleFilterCity} ></Filter>
          </div>
          <div className='content-container'>
            <Content content={content}></Content>
          </div>
        </div>
        <Footer no={true}></Footer>
        <div style={{display: "none"}}>{filterCriteria}</div>
    </div>
  )
}

export default Werkenbij
