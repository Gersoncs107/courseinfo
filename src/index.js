import ReactDOM from 'react-dom/client'

import App from './App'
import AppTest from './AppTest'

const notes = [
  {
    id: 1,
    content: 'HTML é fácil',
    important: true
  },
  {
    id: 2,
    content: 'O navegador só pode executar JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET e POST são os métodos mais importantes do protocolo HTTP',
    important: true
  }
]

const result = notes.map(note => note.content)
console.log(result);


ReactDOM.createRoot(document.getElementById('root')).render(<AppTest notes={notes} />)