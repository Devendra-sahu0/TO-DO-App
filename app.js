const inp = document.querySelector('#inp');
const taskStatus = document.querySelector('#task-status');
const form = document.querySelector("form");
const lanes = document.querySelectorAll(".lane")

form.addEventListener('submit', function(err){
    err.preventDefault();

    const input = inp.value.trim();
    const task = taskStatus.value;
    if (input === ''){
        return 0 ;
    }
    addCard(input,task);
})


    lanes.forEach(lane=>{
        lane.addEventListener("dragover",(e)=>{e.preventDefault()})

        lane.addEventListener("drop",(e)=>{
            e.preventDefault();
            const draggedItemId = e.dataTransfer.getData('text/plain');
            const draggedItem = document.getElementById(draggedItemId);
            lane.append(draggedItem);

        })
    })


function addCard(input, laneName){
    const lane = document.querySelector(`#${laneName}`);
    const div = document.createElement('div');
    div.classList.add('card');
    div.id = `task-${Math.random()*100+1}`
    div.setAttribute("draggable",'true');

    div.addEventListener("dragstart",(e)=>{
        console.log('dragstart');
        e.dataTransfer.setData("text/plain",e.target.id);
    })



    const p  = document.createElement('p');
    p.innerHTML = input;

    const  delDiv = document.createElement('div');
    delDiv.classList.add("del-btn");
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.innerText = "Delete";

    lane.appendChild(div);
    div.appendChild(p);
    div.appendChild(delDiv);
    delDiv.appendChild(delBtn);

    delBtn.addEventListener('click', function(){
        div.remove();
    })

    

}