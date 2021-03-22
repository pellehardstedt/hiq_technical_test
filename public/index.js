$('#btn_uploadfile').on('click', uploadFile)

async function uploadFile(){
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];

    const contents = await readFile(file);

    let dataToSend = {text: contents}
    if(!contents) {
        $('.content').html("<p>The uploaded file is empty.</p>")
    }
    else {
        let res = await fetch('/upload', {
            method: 'POST',
             headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }).catch((error) => {
            console(error)
        })
        
        let resJson = await res.json()
        console.log(resJson.data.body.text)

        $('.content').html("<p>" + resJson.data.body.text + "</p>")
    }
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