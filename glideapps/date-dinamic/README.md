## glide-app-scripts

### O objetivo desse repositório é adicionar uma pequena função implementada em [glide apps](https://www.glideapps.com/).

Acesse a [documentação oficial](https://docs.glideapps.com/all/topics/computed-columns/primary/experimental-code-column) fornecida pela Glide para implementar nos seus apps. Mas basicamente cada pasta contém **cinco** arquivos.
* O arquivo **index.html** carrega todos os outros arquivos.
* O arquivo **driver.js** é a interface entre o código que você escreve em function.js e Glide.
* O arquivo **function.js** é o código JavaScript real da sua coluna.
* O arquivo **glide.json** contém metadados sobre seu código, como seu nome, uma descrição, quais parâmetros ele usa e que tipo de resultado ele produz.
* O **README.md** é um arquivo markdown que explica um pouco do que é abordado neste guia.

#### _Fonte: [Documentação Oficial](https://docs.glideapps.com/all/topics/computed-columns/primary/experimental-code-column)_

### Observações: na própria documentação explica que a implementação desses scripts é algo _experimental_.
> We built this feature to learn which computed columns we should add to Glide. The Experimental Code column could change drastically, or we could even remove it. We encourage you to play with it but we don’t recommend building mission-critical functionality with it just yet.
> #### _Fonte: [Documentação Oficial](https://docs.glideapps.com/all/topics/computed-columns/primary/experimental-code-column)_
> *Construímos esse recurso para saber quais colunas computadas devemos adicionar ao Glide. A coluna Código Experimental pode mudar drasticamente, ou podemos até removê-la. Nós encorajamos você a usá-la, mas ainda não recomendamos construir funcionalidades críticas com ela.*

**Sinta-se a vontade para sugerir alterações ou melhoria nos códigos.**

## Data dinâmica

Esse é apenas um pequeno script para manter uma data dinâmica, alterando apenas o mês e ano.