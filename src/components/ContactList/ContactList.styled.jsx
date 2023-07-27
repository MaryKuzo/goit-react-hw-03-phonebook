import styled from '@emotion/styled';

export const ContactUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const ContactLi = styled.li`
  font-family: Pacifico, serif;
  font-size: 36px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column; /* Display name and number in a column */
  align-items: center; /* Center the content horizontally */
`;

export const ContactText = styled.p`
  font-family: Pacifico, serif;
  margin-bottom: 10px; /* Reduce the margin between name and number */
  font-size: 24px;
`;

export const Button = styled.button`
  font-family: Pacifico, serif;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #467a48;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #304030;
  }
`;
