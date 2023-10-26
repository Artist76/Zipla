import React from 'react';
import { useSelector } from 'react-redux';

function IdeaList() {
  const ideas = useSelector((state) => state.ideas);

  return (
    <ul>
      {ideas.map((idea, index) => (
        <li key={index}>{idea}</li>
      ))}
    </ul>
  );
}

export default IdeaList;
