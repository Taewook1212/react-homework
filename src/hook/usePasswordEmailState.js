import { useState } from 'react';

export function usePasswordState(initialValue) {
  const [password, setPassword] = useState(initialValue);

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  return [password, handlePasswordChange];
}

export function useEmailState(initialValue) {
  const [email, setEmail] = useState(initialValue);
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return [email, handleEmailChange];
}
