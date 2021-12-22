//console.log("Pranay");
shownotes();
//add event on click ADD and storing notes in local storage
let addbtn=document.getElementById('addBtn');
addbtn.addEventListener("click",function(e) {
    let addtxt=document.getElementById('addTxt');
    let addtitle=document.getElementById('addTitle');
    let notes=localStorage.getItem("notes");
    let notestitle=localStorage.getItem("notestitle");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
        }
    if(notestitle==null)
        {
            notestitleobj=[];
        }
    else{
            notestitleobj=JSON.parse(notestitle);
            }
    notesobj.push(addtxt.value);
    notestitleobj.push(addtitle.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    localStorage.setItem("notestitle",JSON.stringify(notestitleobj));
    addtxt.value="";
    addtitle.value="";
    //console.log(notesobj);
    shownotes();
})
//function used to show notes from localstorage
function shownotes() {
    let notes=localStorage.getItem("notes");
    let notestitle=localStorage.getItem("notestitle");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
        }
    if(notestitle==null)
        {
            notestitleobj=[];
        }
    else{
            notestitleobj=JSON.parse(notestitle);
        }
    let html="";
    notesobj.forEach(function(element,index) {
        html+=`
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                    
                    <div class="card-body" id="card-body">
                      <h5 class="card-title">${[index + 1]} ${[notestitleobj[index]]}</h5>
                      <p class="card-text">${element}</p>
                      <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
                    </div>
                  </div>`;

        
    }) 
    let noteselm=document.getElementById("notes");
    if(notesobj.length!=0)
    {
        noteselm.innerHTML=html;

    }
    else{
        noteselm.innerHTML="Nothing to show! ADD notes from above";
    }
    
        

}
//function to delete note
function deletenote(index) {
    let notes=localStorage.getItem("notes");
    let notestitle=localStorage.getItem("notestitle");
    if(notes==null)
    {
        notesobj=[];
    }
    else{
        notesobj=JSON.parse(notes);
        }

    if(notestitle==null)
        {
            notestitleobj=[];
        }
    else{
            notestitleobj=JSON.parse(notestitle);
            }
    notesobj.splice(index,1);
    notestitleobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    localStorage.setItem("notestitle",JSON.stringify(notestitleobj));
    shownotes();


    
}
let searchtxt=document.getElementById("searchtxt");
searchtxt.addEventListener("input",function() {
    let inputval=searchtxt.value.toLowerCase();
    let notecards=document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(function(element) {
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        let cardtxttitle=element.getElementsByTagName("h5")[0].innerText;
        if(cardtxt.includes(inputval) || cardtxttitle.includes(inputval))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        
    })
    

})
