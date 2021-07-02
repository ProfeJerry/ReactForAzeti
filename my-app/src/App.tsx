import React, {useState} from 'react';
import './App.css';
import NewsContainer from "./Components/NewsContainer";
import "bootstrap/dist/css/bootstrap.min.css";



export interface NewsProperties {
    source: string;
    title: string;
    imageUrl: string;
    url: string;
    description: string;
    publishedAt: string;
}

function App() {
    const [news, setNews]  = useState<NewsProperties>();

  return (
    <div>
      <h1 className="ms-depth-16">Hacker News ++</h1>
        <div>{NewsContainer("Bestories") }</div>
    </div>
  );
}

export default App;
