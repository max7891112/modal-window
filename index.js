const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
  ]

const m = $.modal({
    title: 'JS is so nice language',
    closable:  true,
    content: `<p>Lorem ipsum dolor sit.</p><p>Lorem ipsum dolor sit.</p>`,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            m.close()
        }},
        {text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked')
            m.close()
        }}
    ]
})

document.addEventListener('click',listenerForCloseOverlay =  function(event) {
    let target = event.target.dataset.close
    if(!target) return
    if(target) {
        m.close()
    } 
})

