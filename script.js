let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#btn");
let newbtn=document.querySelector("#new-btn");
let messagecont=document.querySelector(".message-container");
let message=document.querySelector("#message");
let turn0 = true;//px and po
const win_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the box was click");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });


});
const resetbtn=()=>{
    turn0=true;
    unableddbtn();
    messagecont.classList.add("hide");
}
const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const unableddbtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
const showwinner =(winner)=>{
    message.innerText=`Congrulations,Winner is ${winner}`;
    messagecont.classList.remove("hide");
    disabledbtn();

}
const checkwinner = () => {
    for (let pattern of win_pattern) {
        let v1 = boxes[pattern[0]].innerText;
        let v2 = boxes[pattern[1]].innerText;
        let v3 = boxes[pattern[2]].innerText;
        if(v1 !=""&& v2!="" && v3!=""){
            if(v1===v2 && v2===v3){
                console.log("winner",v1);
                
                showwinner(v1);
                
            }
        }

    }
};
newbtn.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);
