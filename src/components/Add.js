
import { Link } from 'react-router-dom';
import './Add.css';

function Add() {
  return (
    <form action="/action_page.php" style={{left:"32%",top:"40%",position:"relative"}}>
      <div className="mb-3 mt-5" style={{width:"40%"}}>
        <label  className="form-label">Nom :</label>
        <input type="text" className="form-control" id="email" placeholder="Entrez votre Nom" />
      </div>
      <div className="mb-3 mt-3" style={{width:"40%"}}>
        <label  className="form-label">Prenom :</label>
        <input type="text" className="form-control" id="email" placeholder="Entrez votre Prenom" />
      </div>
      <div className="mb-3 mt-3" style={{width:"40%"}}>
        <label  className="form-label">Telephone :</label>
        <input type="text" className="form-control" id="email" placeholder="Entrez votre NTelephoneom" />
      </div>
      <div className="mb-3 mt-3" style={{width:"40%"}} >
        <label  className="form-label">Ville :</label>
        <input type="text" className="form-control" id="email" placeholder="Entrez votre Ville" />
      </div>
      <div className="mb-3" style={{width:"40%"}}>
        <Link to={"/"}><button style={{left:"20%",top:"40%",position:"relative"}} className="btn btn-outline-success text-uppercase mb-3 px-5">Valider</button></Link>
      </div>
    </form>
  );
}

export default Add;
