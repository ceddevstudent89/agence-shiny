import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      {/* AJout du paramètre exemple /42 pour question 42 */}
      <Link to="/survey/1">Questionnaire</Link>
      <Link to="/freelances">Profils</Link>
    </nav>
  );
}
