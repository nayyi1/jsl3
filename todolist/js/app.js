// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem("todos"));
// console.log(todos);
// console.log(typeof todos);
if(todos){
            // single line နဲ့ပဲရေးတာ နည်းလို့
    todos.forEach(todo => addtodo(todo));
}

// Event Listener
formel.addEventListener('submit',(e)=>{
    // console.log('hey');
    e.preventDefault();

    addtodo();

    
});

function addtodo(todo){
    // console.log('i am working');

    let todotext = inputel.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li=document.createElement('li');

        if(todo && todo.complete){
        	// add class
        	li.classList.add("completed");
        }
        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        todoul.appendChild(li);
        inputel.value='';

        // add to local storage
        updatelocalstorage();

        // add line-through by left click
        li.addEventListener('click',()=>{
            // add remove ဆိုတဲ့ featureနှစ်ခုလုံးကိုသပ်သပ်စီခွဲမရေးချင်လို့
            li.classList.toggle('completed');

            updatelocalstorage();
        });

        // remove by rightclick
                        // right click ကိုဖမ်းတာ
        li.addEventListener('contextmenu',(e)=>{
            // console.log('i am working');
            li.remove();

            updatelocalstorage();

            e.preventDefault();
        })

    }else{
        window.alert('Enter your todo');
    }
}

function updatelocalstorage(){
    // console.log('storage s ready');

    todolis = document.querySelectorAll('li');
    // console.log(todolis);

    let todos=[];

    todolis.forEach((todoli)=>{
        // console.log(todoli);
        // console.log(todoli.innerText);

        todos.push({
            text:todoli.innerText,
            // completeရှိလားမရှိလားစစ်တာ
            complete:todoli.classList.contains('completed')
        });

    });

    // console.log(todos);
                                // string formatနဲ့ပြောင်းထည့်တာ
    localStorage.setItem('todos',JSON.stringify(todos));
}