import styled from "styled-components";

export const StyledNewsHomePage = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    /* media Queries */
    @media screen and (max-width: 800px) {
      display: block;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;
