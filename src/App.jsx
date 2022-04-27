import { NebulaProvider } from './Context/Nebula';
import Layout from './Pages/Layout';

function App() {
  return (
    <NebulaProvider>
      <Layout />
    </NebulaProvider>
  );
}

export default App;
