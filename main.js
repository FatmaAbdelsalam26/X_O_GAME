let title = document.querySelector('.title');
let turn = 'x';
let squares = [];
function end(num1,num2,num3){
    title.innerHTML = `${squares[num1]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';
    setInterval(function(){title.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},4000)
}
function winner(){
        for(let i = 0;i<9;i++)
        {
            squares[i]= document.getElementById('item' +i).innerHTML;
            
            
            
        }
        if(squares[0]==squares[1] && squares[1]==squares[2] && squares[0] !=''){
               end(0,1,2);
            }
        else if(squares[3]==squares[4] && squares[4]==squares[5] && squares[3] !=''){
                end(3,4,5);
             }
        else if(squares[6]==squares[7] && squares[7]==squares[8] && squares[6] !=''){
                end(6,7,8);
             }
        else if(squares[0]==squares[3] && squares[3]==squares[6] && squares[0] !=''){
                end(0,3,6);
             }
         else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1] !=''){
                end(1,4,7);
             }
        else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2] !=''){
                end(2,5,8);
             }
         else if(squares[0]==squares[4] && squares[4]==squares[8] && squares[0] !=''){
                end(0,4,8);
             }
        else if(squares[2]==squares[4] && squares[4]==squares[6] && squares[2] !=''){
                end(2,4,6);
             }
}

function game(id)
{
    let element = document.getElementById(id);
    if(turn==='x' && element.innerHTML==='' ){
        element.innerHTML='x';
        turn = 'o';
        title.innerHTML = 'o';

    }
    else if(turn==='o' && element.innerHTML===''){
        element.innerHTML='o';
        turn = 'x';
        title.innerHTML = 'x';
    }
    winner();
}
