import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  width: 98%;
  min-height: calc(100vh - 4rem);
  margin: 2rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.laptop} {
    padding: 1rem;
  }
`;
