import React, { useState, useEffect } from 'react';
import apiUrl from './url';

const FetchQuote = () => {
  const [quoteData, setQuote] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [isError, setError] = useState(false);

  const fetchData = async () => {
    const key = '7YcMEnQZHLUsoyLRyu0wqA==wDZU6mtw0IOwYOdC';
    try {
      setLoad(() => true);
      const res = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': key,
        },
      });
      const fetchedData = await res.json();
      setQuote(fetchedData);
    } catch (error) {
      setError(() => true);
    }
    setLoad(() => false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isError) return <div>Something went wrong</div>;

  if (isLoad) return <div>Loading...</div>;

  return (
    <ul className="dataQuotes">
      {quoteData.map((data) => (
        <li className="quote-data" key={1}>
          {data.quote}
          <br />
          <div className="author">
            {' '}
            <b>{` - ${data.author}`}</b>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FetchQuote;
