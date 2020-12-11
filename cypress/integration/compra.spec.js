/// <reference types="cypress" />

describe('Compra', () => {
    it.only('Efetuar uma compra de produto', () => {

        cy.backgroundLogin()

        cy.visit('/')

        // cy.pause()
        
        let nomeProduto = 'Faded Short Sleeve T-shirts'
        
        // mouseover passa o mouse sobre o produto. Mas deve ter o 'gatilho' (trigger) para acionar esse recurso.
        cy.contains(nomeProduto).trigger('mouseover')
        cy.contains(nomeProduto)
        .parents() // o parents é para podermos buscar dentro da árvore de elementos por nível [h5]
        .siblings('div.button-container') // verificando os irmãos de um elemento
        .children('a')
        .first() // add to cart // O first pega uma posição específica
        .click()

        // Validando se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() // h2
            .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

        // cy.pause()

        cy.get(".button-container a[href$='controller=order']").click()
        
        cy.get(".cart_navigation a[href$='controller=order&step=1']").click()

        /*
        cy.get('#email').type('guilherme.sousa@gazin.com.br')
        cy.get('#passwd').type('12345678')

        cy.get('#SubmitLogin').click()
        */

        // Validando se o endereço de cobrança é igual o de cobrança
        // [type="checkbox"]#addressesAreEquals[value="1"][checked="checked"]

        // asserção | atributo | valor    
        // 'have.attr' quer fizer tenha o atributo checked e que esse atributo se chame checked.
        cy.get('[type="checkbox"]#addressesAreEquals').should('have.attr', 'checked', 'checked')
        cy.get('[type="checkbox"]#addressesAreEquals').should('have.attr', 'name', 'same')
        
        cy.get('button[name="processAddress"]').click()
        
        cy.get('input[type=checkbox]#cgv').check()
        
        cy.get('button[name="processCarrier"]').click()
        
        cy.get('a[class="bankwire"][title$="wire"]').click()
        
        cy.get('#cart_navigation button[type="submit"]')
            .find('span')
            .contains('I confirm my order')
            .click()

        // expect = forma explícita
        // should = forma implícita

        cy.get('p[class="cheque-indent"] strong')
            .should('contain.text', 'Your order on My Store is complete.')


        cy.get('div.box').invoke('text').then((text) => {
            console.log(text)

            // https://regexr.com/
            console.log(text.match(/[A-Z][A-Z]+/g)[1]) // no caso o [1] é um array e representa o ID do pedido
            // 0 -> RTP
            // 1 -> ID do pedido

            // Escrita de um arquivo json com o conteúdo do pedido
            // Caminho do arquivo (o caminho é sempre a partir do root do projeto) | conteúdo do arquivo
            // Ao passar o diretório + nome do arquivo, o mesmo será criado após a execução do teste
            cy.writeFile('cypress/fixtures/pedido.json', { id: `${text.match(/[A-Z][A-Z]+/g)[1]}` })
        })

        cy.get(".cart_navigation a[href$='history']").click()

        // Leitura de um arquivo
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {

            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)
        })

        /*
        * No HTML o . é utilizado para classes.
        * No json o . é utilizado para representar o nível dentro do caminho do arquivo
        */


        /*
        * 1. [x] capturar o texto do box
        * 2. [x] filtrar o texto do box para extrair somente o ID do pedido
        * 3. [x] armazenar o ID do pedido de alguma forma
        * 4. [x] obter o ID do pedido armazenado de alguma forma
        */

    });
});