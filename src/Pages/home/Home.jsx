import Fetured from '../../components/fetured/Fetured';
import List from '../../components/list/List';
import Nav from '../../components/nav/Nav';
import './home.scss'

const Home = ({type}) => {
    return (
        <div className='home'>
           <Nav></Nav>
          <Fetured type={type}/>
           <List></List>
           <List></List>
           <List></List>
        </div>
    );
};

export default Home;