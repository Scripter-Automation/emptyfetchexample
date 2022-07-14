function doGet(e){
  return null
}


function doPost(e){


    const body = e.postData.contents;
    let res;
    const req = JSON.parse(body);

    const command = req.command

    const data = req.data

    res = {error:true, msg: "no command ran"}
    
       

    return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);

}
