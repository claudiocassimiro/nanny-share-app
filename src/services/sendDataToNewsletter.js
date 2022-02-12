const sendDataToNewsletter = async (data) => {
  const { name, email } = data;
  try {
    await fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email})
    });
  } catch (e) {
    console.log(e.message);
  }
  console.log('ok!!!');
};

export default sendDataToNewsletter;
