import './App.css';
import ContactCard from './components/Card';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import Loader from './components/PageLoader';

function App() {
  return (
    <div className="App">
      <Loader />
      <ContactCard>
        <CardHeader />
        <CardBody />
        <CardFooter />
      </ContactCard>
    </div>
  );
}

export default App;