const fetchGreeting = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/greetings');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(400);
  }
};

export default fetchGreeting;
