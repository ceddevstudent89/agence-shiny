import { useParams } from "react-router-dom";

export default function ClientForm() {
  const { questionNumber } = useParams();
  return (
    <div>
      <h1>Questionnaire Client</h1>
      <h2>Question numéro : {questionNumber}</h2>
    </div>
  );
}
