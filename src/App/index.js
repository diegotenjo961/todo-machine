import React from 'react';
import { useTodo } from './useTodo';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodoHeader } from '../TodoHeader';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { ChangeAlert } from '../ChangeAlert';
import { Modal } from '../Modal';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
		totalTodos, 
		completedTodos,
		searchValue,
		setSearchValue,
		addTodo,
		sincronizeTodos,
  } = useTodo();
  
  return (
    <React.Fragment>
	  <TodoHeader loading={ loading }>
			<TodoCounter 
	  	  totalTodos={totalTodos} 
				completedTodos={completedTodos}
			/>
	   <TodoSearch 
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
	  </TodoHeader>

      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !totalTodos) && <EmptyTodos />}
		    {(!loading &&	!searchedTodos.length && !!searchValue.length) && <EmptySearchResults searchValue={searchValue} />
				}
        {!loading && (
					searchedTodos.map(todo => (
						<TodoItem
							key={todo.text}
			        text={todo.text}
			        completed={todo.completed}
			        onComplete={() => completeTodo(todo.text)}
				      onDelete={() => deleteTodo(todo.text)}
					  />
	        ))
				)} 
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm 
						addTodo={addTodo}
						setOpenModal={setOpenModal}
				  />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />


		  <ChangeAlert 
				sincronize={sincronizeTodos}
			/>
    </React.Fragment>
  );
}

export default App;
