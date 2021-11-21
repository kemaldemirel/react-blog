import React from 'react';
import { Header, AddPostForm } from './components';
import Home from './pages/Home';

function App() {
  const [openPostForm, setOpenPostForm] = React.useState(false);
  return (
    <div className="App">
      <Header onClickOpenForm={() => setOpenPostForm(true)} />
      <Home />
      <AddPostForm isOpen={openPostForm} isClose={() => setOpenPostForm(false)} />
    </div>
  );
}

export default App;
