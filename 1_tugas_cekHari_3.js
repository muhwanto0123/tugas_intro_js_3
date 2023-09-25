const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
    // .then((pesan) => {
    //     console.log("sekarang hari", pesan)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })
}
// try{
cekHariKerja("senin")
    .then((pesan) => {
        console.log(`hari ${pesan} saatnya kerja`)
    }).catch((error) => {
        console.log(error.message)
    })
// } catch (error){
//     console.log("Error bro : ", error)
// }

// .then dan catch adalah metode yang digunakan dalam JavaScript untuk mengelola Promise. 
// Promise adalah objek yang digunakan untuk menangani tugas-tugas asinkron 

// try...catch adalah blok yang digunakan untuk menangani kesalahan (exceptions) dalam kode JavaScript secara lebih umum. 
// Ini berguna untuk menangani kesalahan yang tidak terkait dengan Promise,
// seperti kesalahan sintaksis atau kesalahan yang terjadi dalam fungsi yang Anda panggil.

