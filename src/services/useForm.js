import { useState } from 'react';

export function useForm() {
  const [form, setForm] = useState({});

  function handleChange(event) {
    event.persist();
    setForm(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }
  return [form, handleChange]
}