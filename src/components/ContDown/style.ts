import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media ${(props) => props.theme.laptop} {
    font-size: 5rem;
    line-height: 3rem;
    gap: 0.8rem;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 3rem;
    line-height: 0.5rem;
    gap: 0.3rem;
  }
`;

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["green-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.laptop} {
    width: 2rem;
  }

  @media ${(props) => props.theme.mobile} {
    width: 1rem;
  }
`;
