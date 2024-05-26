import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import {
  handleCustomUser,
  handleFilterUser,
  handleFindUser,
  handleReduceArrayTotal,
  handleReduceUser,
  handleTagsUser,
  handleUser,
  handleUserForEach,
} from "./components/\barrayMethods";
import {
  currentPromise,
  promise2,
  promise3,
  test,
} from "./components/callback-promise-asyncwait";
import viteLogo from "/vite.svg";
import {
  handleCookie,
  handleLocalStorage,
  handleRemoveItemLocalStorage,
  handleSessionStorage,
} from "./components/cookie-localstorage-sessionstorage";

function App() {
  const [count, setCount] = useState(0);
  // const [imageUrl, setImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await currentPromise;
        const response2 = await promise2;
        const response3 = await promise3;
        setImageUrls([
          response.responseURL,
          response2.responseURL,
          response3.responseURL,
        ]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, []);

  // const fetchImage = () => {
  //   httpGetAsync("https://picsum.photos/200/300", (data) => {
  //     console.log(data);
  //     setImageUrl(data.responseURL);
  //   });
  // };

  // console.log(fetchImage());

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "24px",
            gap: "24px",
          }}
        >
          <button onClick={test}>Run Test</button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
            }}
          >
            {imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index}`} />
            ))}
            {/* {imageUrl && (
              <>
                <img id="img_1" src={imageUrl} alt="Fetched from URL" />
                <img id="img_2" src={imageUrl} alt="Fetched from URL" />
                <img id="img_3" src={imageUrl} alt="Fetched from URL" />
              </>
            )} */}
          </div>
          <button onClick={handleUserForEach}>Users For Each Array Test</button>
          <button onClick={handleUser}>Users Array Test</button>
          <button onClick={handleTagsUser}>Tag Users Test</button>
          <button onClick={handleFilterUser}>Filter Users Array</button>
          <button onClick={handleFindUser}>Find Users Array</button>
          <button onClick={handleCustomUser}>Custom Users Array</button>
          <button onClick={handleReduceUser}>Custom Reduce Users Array</button>
          <button onClick={handleReduceArrayTotal}>Total Reduce Array</button>
          <button
            onClick={handleCookie}
            style={{
              font: "inherit",
              backgroundColor: "#ebb002",
              border: "1px solid #ebb002",
              color: "#201d0f",
              padding: "0.5rem 1.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cookie
          </button>
          <button
            onClick={handleLocalStorage}
            style={{
              font: "inherit",
              backgroundColor: "#ebb002",
              border: "1px solid #ebb002",
              color: "#201d0f",
              padding: "0.5rem 1.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            LocalStorage
          </button>
          <button
            onClick={handleRemoveItemLocalStorage}
            style={{
              font: "inherit",
              backgroundColor: "#ebb002",
              border: "1px solid #ebb002",
              color: "#201d0f",
              padding: "0.5rem 1.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Remove Item With Key LocalStorage
          </button>
          <button
            onClick={handleSessionStorage}
            style={{
              font: "inherit",
              backgroundColor: "#ebb002",
              border: "1px solid #ebb002",
              color: "#201d0f",
              padding: "0.5rem 1.5rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            SessionStorage
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
