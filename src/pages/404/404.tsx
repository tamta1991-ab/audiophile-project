import errorImg from "../404/error.png"
import "./404.css"
import GoBackButton from "../../components/GoBack/goback";
const Notfound = () => {
    return <div className="container error-container">
      <GoBackButton/>
      <div className="text">PAGE NOT FOUND</div>
      
      <img width={300}  height={300} src={errorImg} alt=""  />
    </div>;
  };
  
  export default Notfound;