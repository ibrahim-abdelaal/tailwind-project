import { FC, useState } from 'react';
import { BasicInput, SubmitButton } from '../atoms';

export const SubscribeForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const handleInputChange = (input: string) => {
    setEmail(input)
  }
  const handleSubmit = () => {
    console.log(email);
    setEmail('');
  }

  return (
    <form>
      <BasicInput type='email' placeholder='Enter email address' value={email} onChange={(input: string) => handleInputChange(input)} />
      <SubmitButton name='Subscribe' onClick={ handleSubmit } />
    </form>
  );
}