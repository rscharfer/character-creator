import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import RectangleForTexture from './components/RectangleForTexture'

function App() {
  return (
    <> 
      <RectangleForTexture/>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
