const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null = document.querySelector('#input-localizacao')

const sectionTempoInfo = document.querySelector('#tempo-info')

const API_KEY = '2d5ce8744d1bc2ea6eef031d3a79e0e9';

form?.addEventListener('submit', async (event) => {
    event.preventDefault(); // imped que o formulario fique recarregando a pagina

    if (!input || !sectionTempoInfo) return;

    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("O local precisa ter, pelo menos, 3 letras..");
        return;
    }

    try {


        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=${API_KEY}&lang=pt_br&units=metric`)

        const dados = await response.json();


        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name + " - " + dados.sys.country,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        }

        sectionTempoInfo.innerHTML = `
    <div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temperatura}°C</span>
    </div>
    <img src="${infos.icone}">
    `;
        console.log(dados);
    } catch (err) {
        console.log('Deu um erro na obtenção dos dados da API.', err)
    }
})