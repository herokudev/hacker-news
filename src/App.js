import './App.css';
import { useState, useEffect } from 'react'
import Loading from './components/Loading';
import News from './components/News';
const url = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0';

function App() {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])  

  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const news = await response.json()
      setLoading(false)
      setNews(news)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchNews()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }  

  return (
    <div className="App">
        <main>
          <News news={news} />
        </main>
    </div>
  );
}

export default App;
