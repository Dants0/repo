const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://www.op.gg/summoners/br/Fazekas')
  .then(response => {
    if (response.status === 200) {
    //   console.log(response)
        const html = response.data;
    //   console.log(html)
      const $ = cheerio.load(html);

      // Selecione os elementos com classe "result" dentro da hierarquia desejada
      const elementsWithResultClass = $('#content-container > div:nth-child(1) > div.css-1kw4425.ecc8cxr0 > div.content > div.win-lose-container > div.ratio');
      
      // Agora você pode iterar sobre esses elementos e fazer o que desejar
      elementsWithResultClass.each((index, element) => {
        // Faça algo com cada elemento, por exemplo, exiba seu texto
        console.log($(element).text());
      });
    }
  })
  .catch(error => {
    console.error(error);
  });
