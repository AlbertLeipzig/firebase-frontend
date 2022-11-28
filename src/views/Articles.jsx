import { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const articleCollection = collection(db, 'articles');
  const createArticle = async () => {
    await addDoc(articleCollection, { name: name, price: price });
  };

  const deleteArticle = async (id) => {
    console.log(id);
    // const articleId = doc(db, 'articles', id);
    // await deleteDoc(articleId);
  };

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articleCollection);
      /* setArticles(data.docs.map((doc) => doc.data())); */
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, [createArticle, deleteArticle]);

  return (
    <div className="articles">
      <h1>Articles</h1>
      <label htmlFor="articleName">
        Article Name:
        <input
          type="text"
          name="articleName"
          id="articleName"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="articlePrice">
        Article Price:
        <input
          type="text"
          name="articlePrice"
          id="articlePrice"
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={createArticle}>Create Article</button>
      {articles && (
        <ul>
          {articles.map((article) => (
            <li
              key={article.id}
              style={{
                display: 'flex',
                width: '35vw',
                justifyContent: 'space-between',
              }}
            >
              <h2>{article.name}</h2>
              <p>{article.price}</p>
              {/* <button
                onClick={() => {
                  deleteArticle(article.id);
                }}
              >
                X
              </button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
