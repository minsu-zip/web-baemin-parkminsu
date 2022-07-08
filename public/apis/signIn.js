export const request = async (email, password) => {
  try {
    const result = await fetch('/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: email,
        password,
      }),
    })

    console.log(result)
    if (result.redirected) window.location.href = result.url
  } catch (error) {
    console.log(error)
  }
}
