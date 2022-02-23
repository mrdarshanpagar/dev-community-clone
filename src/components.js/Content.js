import React from 'react';
import ArticleComponent from './ArticleComponent';
import { useEffect,useState } from 'react';

export default function Content() {
  const [articles, setarticles] = useState(null)

  useEffect(() => {
     
    setTimeout(async () => {
      const res = await fetch('https://dev.to/api/articles')
      const data = await res.json()
      console.log(data)
      setarticles(data)
      
    }, 2000);
  }, [])
  

  return (
    <main className='main-content'>
      <header>
        <h1>Posts</h1>
      
      <nav>
        <a href="#">Feed</a>
        <a href="#">Week</a>
        <a href="#">Month</a>
        <a href="#">Infinity</a>
        <a href="#">Latest</a>

      </nav>

      <select 
      name="" 
      id="dropdown-select"
      className='dropdown'
      >
        <option value="Feed" defaultValue>Feed</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
        <option value="Year">Year</option>
        <option value="Infinity">Infinity</option>
      </select>

      </header>

      <div className="articles">
        {
          articles && 
          articles.map(
            (article,id)=>{
              return <ArticleComponent key={id} data={article}/>
            }
          )
        }
      </div>
    </main>
  );
}
