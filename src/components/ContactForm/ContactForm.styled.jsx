import styled from '@emotion/styled'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px;

`
export const FormText = styled.span`
 font-family: Pacifico, serif;
 font-size: 36px;
 margin-bottom: 20px;
 `

export const FormLabel = styled.label`
  font-family: Pacifico, serif;
  margin-bottom: 30px;
  font-size: 24px;
`
export const FormInput = styled.input`
  padding: 8px;
  margin-left: 20px;
  font-family: Pacifico, serif
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
export const Button = styled.button`
  font-family: Pacifico, serif
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

`

