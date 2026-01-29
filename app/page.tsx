'use client';

import { useState } from 'react';

export default function Home() {
  const [showControls, setShowControls] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleProcessText = () => {
    // Placeholder for processing logic
    console.log('Process text clicked');
    setShowControls(true);
    setShowOutput(true);
  };

  return (
    <div>
      {/* Header */}
      <header className="text-center mb-8 p-5 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-slate-700 mb-2">Readthrough App</h1>
        <p className="text-gray-700">
          Enhance your reading comprehension with visual formatting, notes, and bookmarks
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        {/* Input Section */}
        <section className="bg-white p-5 mb-5 rounded-lg shadow-md">
          <h2 id="input-text-label" className="text-2xl text-slate-600 mb-4">
            Input Text
          </h2>
          <textarea
            id="text-input"
            aria-labelledby="input-text-label"
            placeholder="Paste or type your text here..."
            rows={10}
            className="w-full p-2.5 border border-gray-300 rounded text-sm resize-y focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:border-blue-500"
          />
          <button
            id="process-btn"
            type="button"
            onClick={handleProcessText}
            className="bg-blue-500 text-white px-5 py-2.5 border-none rounded cursor-pointer text-sm mt-2.5 hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-slate-700"
          >
            Process Text
          </button>
        </section>

        {/* Controls Section */}
        {showControls && (
          <section className="bg-white p-5 mb-5 rounded-lg shadow-md">
            <div className="flex gap-4 flex-wrap items-center">
              <div className="flex items-center gap-2.5">
                <label htmlFor="bookmark-select" className="text-gray-700">
                  Bookmarks:
                </label>
                <select
                  id="bookmark-select"
                  aria-label="Select a bookmark"
                  className="p-2 border border-gray-300 rounded focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 focus:border-blue-500"
                >
                  <option value="">Jump to bookmark...</option>
                </select>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  id="copy-all-notes-btn"
                  type="button"
                  className="bg-blue-500 text-white px-5 py-2.5 border-none rounded cursor-pointer text-sm hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-slate-700"
                >
                  📋 Copy All Notes
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <span id="highlight-status" className="text-gray-700">
                  Press Ctrl+H (Cmd+H on Mac) to toggle highlight mode
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Output Section */}
        {showOutput && (
          <section className="bg-white p-5 mb-5 rounded-lg shadow-md">
            <h2 className="text-2xl text-slate-600 mb-4">Reading View</h2>
            <div id="paragraphs-container"></div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-500 italic">
        <p>Tip: Use Ctrl+H (Cmd+H on Mac) to enable highlight mode and mark important text</p>
      </footer>
    </div>
  );
}
