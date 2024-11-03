import React from 'react';
import TodoList from './presentation/components/TodoList';
import NoTask from './presentation/components/NoTask';
import DeleteModal from './presentation/components/DeleteModal';
import EditModal from './presentation/components/EditModal';
import ShareModal from './presentation/components/ShareModal';
import './style.css';


function App() {
  return (
    <div className="App">
      <TodoList/>
      <NoTask/>
      <DeleteModal/>
      <EditModal/>
      <ShareModal/>
    </div>
  );
}

export default App;
