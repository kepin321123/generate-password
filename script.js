function genpassword(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordlength = 8
    let passwrod = ''






    for(let i = 0; i <passwordlength; i++){
        let randomnumber = Math.floor(Math.random() * chars.length)
        passwrod += chars.substring(randomnumber, randomnumber+1)

    }
    document.getElementById('password').value = passwrod
}


function copypassword(){
    const copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
    alert('password berhasil di salin')
}