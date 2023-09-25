const getData = async () =>  {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if(!response.ok){
      throw new Error(`Http error Status: ${response.status}` )
    }

    const data = await response.json();
    const nama = data.map((user) => user.name)
    nama.forEach((user, index) => {
      console.log(`${index + 1} - ${user.name}`)
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

// Menggunakan getData
getData()