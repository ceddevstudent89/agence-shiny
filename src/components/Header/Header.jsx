import { Link } from "react-router-dom";

import styled from "styled-components";

import colors from "../../utils/style/colors";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;

  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

export default function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      {/* AJout du paramètre exemple /42 pour question 42 */}
      <StyledLink to="/freelances">Profils</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Questionnaire
      </StyledLink>
    </nav>
  );
}
