const cheerio = require('cheerio');
const axios = require('axios');

const url = 'https://www.op.gg/summoners/br/la%20ele%20pai'
const path = '#content-container > div:nth-child(1) > div.css-1kw4425.ecc8cxr0 > div.content > div.info > div.tier'

axios.get(url)
  .then(response => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Selecione o elemento desejado com o seletor CSS fornecido
      const element = $(path);

      // Agora você pode acessar ou manipular o elemento conforme necessário
      element.each((index, element) => {
        // Faça algo com cada elemento, por exemplo, exiba seu texto
        console.log($(element).text());
      });
    }
  })
  .catch(error => {
    console.error(error);
  });
