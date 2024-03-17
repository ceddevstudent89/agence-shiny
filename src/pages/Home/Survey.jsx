// récupérer ce paramètre dans survey à l'aide du Hook useParams
// import { Link, Outlet } from "react-router-dom";

import { useParams, Link } from "react-router-dom";

export default function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumer = questionNumber === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Questionnaire numéro : {questionNumber} </h2>
      <Link to={`/survey/${prevQuestionNumer}`}>Précédent</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
      {/* <Link to="client">Questionnaire Client</Link>
      <Link to="Freelance">Questionnaire Freelance</Link>
      <Outlet /> */}
    </div>
  );
}
