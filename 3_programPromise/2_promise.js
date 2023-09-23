// Fungsi untuk menentukan apakah buah tersebut busuk atau tidak
function classifyFruit(fruit, rotten) {
    return new Promise((resolve, reject) => {
      // Simulasi penentuan apakah buah tersebut busuk atau tidak
      setTimeout(() => {
          // Data buah untuk diuji
        if (rotten > 0.5) {
            resolve(`${fruit} adalah buah busuk.`);
        } else if (rotten >= 0 && rotten <= 0.5) {
            resolve(`${fruit} adalah buah segar.`);
        } else {
            reject(`Tidak dapat mengklasifikasikan ${fruit} karena data tidak valid.`);
        }
      }, 1000); // Simulasi proses yang memakan waktu
    });
  }
  
classifyFruit("Apel", 0.10)
    .then((result) => {
    console.log(result);
    })
    .catch((error) => {
    console.error(error);
    });
 
  