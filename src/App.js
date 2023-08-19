import { Container, Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import Profilebar from './components/Profilebar';
import SideBar from './components/SideBar';
import Descripation from './components/Descripation';

function App() {
  return (
    <div className="App">
      <Container maxW={'87%'} margin={'auto'} p={'10px'} className='App' >
        <Profilebar />
        <Grid
          p={'10px'}
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem borderRadius={'10px'} colSpan={1} bg='#f5f5f5f5' ><SideBar/></GridItem>
          <GridItem borderRadius={'10px'} colSpan={4} bg='#040407' ><Descripation /></GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
