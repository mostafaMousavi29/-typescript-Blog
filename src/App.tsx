import React from 'react';
import BlogCardComponent from './components/BlogCard';
import { BlogTableComponent } from './components/BlogsTable';

function App() {
  return (
    <div className="App">
      <BlogTableComponent />
      <BlogCardComponent />
    </div>
  );
}

export default App;
