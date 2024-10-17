import { DndContext } from '@dnd-kit/core';
import Builder from './Builder';
import GlobalStyle from './styles/GlobalStyles';

function App() {
    return (
        <div className='form-alcmst'>
            <GlobalStyle />
            <DndContext>
                <Builder
                    onSave={(v) => {
                        console.log(v);
                        localStorage.setItem('data', JSON.stringify(v));
                    }}
                />
            </DndContext>
        </div>
    );
}

export default App;
