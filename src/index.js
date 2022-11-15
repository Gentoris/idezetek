import './style.css';

function adatMegjelenites(idezetLista){
    let lista = document.getElementById('idezetek');
    for(p of eredmeny.quotes){
        let li = document.createElement('li');
        li.textContent = p.quote + '($' + p.author + ')';
        lista.appendChild(li);    
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('osszes').addEventListener('click', async () => {
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes.filter(p => p.quote === '');
        adatMegjelenites(idezetek);
    })

    document.getElementById('the').addEventListener('click', async () => {
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes.filter(p => p.quote === 'The');
        adatMegjelenites(idezetek);
    })
    
    let response = await fetch('/quotes.json');
    let eredmeny = await response.json();

    adatMegjelenites(eredmeny.quotes);
});