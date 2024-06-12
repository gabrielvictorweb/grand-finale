import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  padding: 1rem;
  cursor: pointer;

  background-color: rgba(243, 156, 18, 0.1);

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`;

export const Title = styled.h1`
  color: #000;

  font-size: 1.4rem;
  font-weight: 400;
`;

export const Description = styled.p`
  font-size: 1rem;

  word-break: break-all;

  margin: 10px 0;
  color: #666;
`;

export const Limit = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #666;
  text-align: right;
`;
