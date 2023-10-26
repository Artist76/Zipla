import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIdea } from './IdeaSlice';

function IdeaForm() {
  const [idea, setIdea] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    dispatch(addIdea(idea));
    setIdea('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Add your idea..."
      />
      <button type="submit">Add Idea</button>
    </form>
  );
}

export default IdeaForm;
