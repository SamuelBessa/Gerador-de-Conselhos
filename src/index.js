document.getElementById('button').addEventListener('click', () => {
    chamarApi();
});

const url = 'https://api.adviceslip.com/advice';


async function chamarApi() {
    try {
        const resp = await fetch(url);
        if (resp.status === 200) {
            const obj = await resp.json();
            const conselho = obj.slip;
            const cons = conselho.advice;
            const adviceId = conselho.id;
            document.getElementById("advice-id").innerText = adviceId;
            document.getElementById("cons").innerText = cons;
        } else {
            console.error('Erro na requisição:', resp.status); //Tratamento de erro
        }
    } catch (error) {
        console.error('Erro ao chamar a API:', error); // Tratamento de exceção
    }
}

chamarApi();