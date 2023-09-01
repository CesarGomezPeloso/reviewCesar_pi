import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions"; 


const Home = () => {
  //Cuando se monta, que haga el Dispatch
  // useEffect()   -    useDispatch()
  const dispatch = useDispatch();
  useEffect (()=>{
      dispatch (getUsers());  
  },[])

  return (
    <>
      <h1>Esta es la Vista de Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
