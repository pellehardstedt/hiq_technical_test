$('#btn_uploadfile').on('click', uploadFile)

async function uploadFile(){
    console.log("he")
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];

    const contents = await readFile(file);

    let dataToSend = {text: contents}
    let res = await fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(dataToSend)
    })
    let resJson = await res.json()
    console.log(resJson.data.body.text)

    $('.content').append(resJson.data.body.text)
}

function readFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = res => {
        resolve(res.target.result);
      };
      reader.onerror = err => reject(err);
  
      reader.readAsText(file);
    });
  }