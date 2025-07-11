import { useState } from "react";
import shortid from "shortid";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!url.trim()) return;

    const id = shortid.generate();  
    const shortened = `${window.location.origin}/${id}`;

    setShortUrl(shortened);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl p-6 rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">🔗 URL Shortener (Local)</h1>

        <input
          type="text"
          placeholder="Enter a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleShorten}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Generate Short URL
        </button>

        {shortUrl && (
          <div className="mt-6 bg-green-100 p-4 rounded-xl text-center">
            <p className="text-green-700 font-medium">Shortened URL:</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 text-blue-600 underline break-words"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
