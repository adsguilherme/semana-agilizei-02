/// <reference types="cypress" />

describe('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.visit('/');
        
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

        cy.get(".button-container a[href$='controller=order']").click()
        
        cy.get(".cart_navigation a[href$='controller=order&step=1']").click()

        cy.get('#email').type('guilherme.sousa@gazin.com.br')
        cy.get('#passwd').type('12345678')

        cy.get('#SubmitLogin').click()
        
        // [type="checkbox"]#addressesAreEquals
        // [type="checkbox"]#addressesAreEquals[value="1"][checked="checked"]
        
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
    });
});