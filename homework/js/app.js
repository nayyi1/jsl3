// Start stopwatch and background blur

const background = document.getElementById('background');
const display = document.getElementById('display');
const btn = document.getElementById('btn');
const hide = document.querySelector('.hide');


let seconds = 0;
let millimin = 0;

let time;


btn.addEventListener('click',function starttimer(){
	if(time !== null){
		clearInterval(time);
	}
	time = setInterval(displaytimer,10);
	
})

function displaytimer(){
	millimin +=10;

	if(millimin === 1000){
		millimin = 0;
		seconds++;
		background.style.filter = `blur(${20 - seconds * 4}px)`;

		if(seconds === 5){
			display.style.display = "none";
			btn.style.display="none";
			hide.style.display="block";

		}
		
	}
		let s = seconds < 10 ? "0" + seconds : seconds;
		let ms = millimin < 10 ? "00" + millimin : millimin < 100 ? "0" + millimin : millimin;

		display.innerText = `${s} : ${ms}`;


}

// End stopwatch and background blur

// Start navbar
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');
const todolist = document.querySelector('.todolist');
const todolistnav = document.getElementById('todolistnav');
const pricingnav = document.getElementById('pricingnav');
const pricing = document.querySelector('.pricing');
const noti = document.querySelector('.noti');
const toastnav = document.getElementById('toastnav');
// console.log(nav);

openbtn.addEventListener('click',()=>{
	// console.log('open');

	navs.forEach(nav=>{nav.classList.add('visible')});
})

closebtn.addEventListener('click',()=>{
	// console.log('close');
	navs.forEach(nav=>{nav.classList.remove('visible')});
})

todolistnav.addEventListener('click',()=>{
	todolist.style.display="inline-block";
	navs.forEach(nav=>{nav.classList.remove('visible')});
     pricing.style.display="none";
      noti.style.display="none";
      display.style.display = "none";
            btn.style.display="none";
})

pricingnav.addEventListener('click',()=>{
    pricing.style.display="block";
    navs.forEach(nav=>{nav.classList.remove('visible')});
    todolist.style.display="none";
    noti.style.display="none";
    display.style.display = "none";
    btn.style.display="none";
})

// End navbar


// Start Todolist
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

// End Todolist
// Start Pricing Section
// UI

const checkbox = document.getElementById('toggle'),
        slider = document.getElementById('slider');

const basic = document.querySelector('.basic'),
       prof = document.querySelector('.prof'),
     master = document.querySelector('.master');

// Event Listener
slider.addEventListener('click',()=>{
    // console.log('hay');

    if(!checkbox.checked){
        basic.innerText = 110;
        prof.innerText = 230;
        master.innerText = 350;
    }else{
        [basic.textContent,prof.textContent,master.textContent]=[9.99,19.99,29.99]
    }
})
// End Pricing Section



