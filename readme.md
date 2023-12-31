# Projeto de estudo 'Condição do Tempo'

#### O [projeto-condicao-tempo](https://github.com/ClaytonEduard/projeto-condicao-tempo) é um projeto construído utilizando HTML, CSS, JavaScript e TypeScript. Ele realiza consultas na API OpenWeatherMap ([https://openweathermap.org/](https://openweathermap.org/)) para fornecer informações meteorológicas precisas e atualizadas.

## Funcionalidades

- **Consulta de Dados Meteorológicos:** O aplicativo permite que os usuários consultem informações meteorológicas de diferentes cidades em tempo real.
- **Exibição de Dados:** Os dados retornados pela API OpenWeatherMap são apresentados de forma amigável e intuitiva, facilitando a compreensão das condições meteorológicas.

## Tecnologias Utilizadas

- **HTML:** Utilizado para a estruturação da página web.
- **CSS:** Responsável pela estilização e aparência visual do aplicativo.
- **JavaScript:** Utilizado para interações dinâmicas na página e manipulação dos dados.
- **TypeScript:** Adiciona tipagem estática ao JavaScript, facilitando a manutenção e prevenindo erros comuns.

## Como Utilizar

1. **Clone o Repositório:**

   <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/seu-usuario/projeto-condicao-tempo.git
   </code></div></div></pre>

2. **Acesse o Diretório:**

   <pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">cd projeto-condicao-tempo</code></div></div></pre>

3. Insira o comando no terminal - para instalar as dependências

```
    npm init -y
```

4. Insira o comando no terminal - para instalar as dependências do Typescript

```
    npm i -D typescript
```

5. Insira o comando no terminal - para iniciar o Typescript

```
    npx tsc --init
```

6. Abra o Arquivo HTML:
   Abra o arquivo index.html em seu navegador favorito.
7. Informe a Cidade:
   Digite o nome da cidade desejada no campo de pesquisa e pressione Enter.

## Configuração da API

Certifique-se de obter uma chave de API válida do OpenWeatherMap em [https://openweathermap.org/api](https://openweathermap.org/api) e substitua a variável `API_KEY` no arquivo `index.ts` com sua chave.

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>typescript</span><button class="flex ml-auto gizmo:ml-0 gap-2 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C10.8954 4 10 4.89543 10 6H14C14 4.89543 13.1046 4 12 4ZM8.53513 4C9.22675 2.8044 10.5194 2 12 2C13.4806 2 14.7733 2.8044 15.4649 4H17C18.6569 4 20 5.34315 20 7V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7C4 5.34315 5.34315 4 7 4H8.53513ZM8 6H7C6.44772 6 6 6.44772 6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7C18 6.44772 17.5523 6 17 6H16C16 7.10457 15.1046 8 14 8H10C8.89543 8 8 7.10457 8 6Z" fill="currentColor"></path></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-typescript">const API_KEY = 'sua-chave-de-api-aqui';
</code></div></div></pre>

## Demostração
https://www.loom.com/share/ef0bf97e71b241cf8683bbdfb1feed91?sid=4f7df187-33d1-4792-bcf0-002ec5acc6cb
