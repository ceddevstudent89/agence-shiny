// récupérer ce paramètre dans survey à l'aide du Hook useParams
// import { Link, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumber === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/survey")
      .then((response) =>
        response.json().then(({ surveyData }) => {
          setSurveyData(surveyData);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Questionnaire numéro : {questionNumber} </h2>
      <p>{surveyData[questionNumber]}</p>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {surveyData[questionNumberInt + 1] ? (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
      {/* <Link to="client">Questionnaire Client</Link>
      <Link to="Freelance">Questionnaire Freelance</Link>
      <Outlet /> */}
    </div>
  );
}
