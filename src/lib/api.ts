export const sendContactForm = async (data: unknown) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then((res) => {
    if (!res.ok) throw new Error('Falha ao enviar o e-mail!')
    return res.json()
  })
