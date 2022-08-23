const mainHtml = document.querySelector('main')

class ListarCards {
    static baseUri =  "https://kenzie-news-api.herokuapp.com/api/news"

    static async noticias() {
        const noticia = await fetch(`${this.baseUri}`)
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => console.log('This is the error' + err))
      
        return noticia
    } 

    static listandoCards(array) {
        array.forEach(element => {
            let articleNoticia = document.createElement('article')
            let divImagem = document.createElement('div')
            let image = document.createElement('img')
            let divContent = document.createElement('div')
            let spanCategoria = document.createElement('span')
            let h2Titulo = document.createElement('h2')
            let pNoticia = document.createElement('p')
            let spanFonte = document.createElement('span')

            articleNoticia.id = element.id
            divImagem.classList.add('article__imagem')
            image.src = element.imagem
            image.alt = element.titulo
            divContent.classList.add('article__content')
            spanCategoria.innerText = element.categoria
            spanCategoria.classList.add('spanCategoria')
            h2Titulo.innerText = element.titulo
            pNoticia.innerText = element.resumo
            spanFonte.classList.add('spanFonte')
            spanFonte.innerText = `Fonte: ${element.fonte}`


            divImagem.append(image)
            divContent.append(spanCategoria, h2Titulo, pNoticia, spanFonte)
            articleNoticia.append(divImagem, divContent)

            mainHtml.append(articleNoticia)
        });
    }
}

let arrayNoticias = await ListarCards.noticias()

ListarCards.listandoCards(arrayNoticias)