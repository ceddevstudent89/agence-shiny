import { useParams } from "react-router-dom";

export default function FreelanceForm() {
  const { questionNumber } = useParams();
  return (
    <div>
      <h1>Questionnaire Freelance</h1>
      <h2>Question numéro {questionNumber} </h2>
    </div>
  );
}
