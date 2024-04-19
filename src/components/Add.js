
import { Link } from 'react-router-dom';
import './Add.css'; // Assurez-vous que le chemin est correct pour votre fichier CSS

function Add() {
 
  return (
  
    <form >
      <h2>Inscription</h2>
      <input type="text"   placeholder="Tapez votre nom" />
      <br />
      <input type="text"   placeholder="Tapez votre prénom" />
      <br />
      <input type="text"  placeholder="Tapez votre téléphone" />
      <br />
      <input type="text"   placeholder="Tapez votre ville" />
      <br />
      <Link to={"/"}><button  className="btn btn-outline-success text-uppercase mb-3 px-5"> valider</button></Link>
     </form>

  );
}

export default Add;
