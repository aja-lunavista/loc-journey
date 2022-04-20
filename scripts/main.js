function upDate(previewPic){
    document.getElementById('image').innerHTML=previewPic.alt;
    document.getElementById('image').style.backgroundImage="url('"+previewPic.src+"')";
}

function unDo(){
    document.getElementById('image').style.backgroundImage="url('')";
    document.getElementById('image').innerHTML="FAV STYLES - Select the thumbnails below.";
}

function Hide(HideID){
    HideID.style.display = "none";
}