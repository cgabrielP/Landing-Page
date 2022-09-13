export let navbar = {
    logo: 'Start Bootstrap',
    options: [
        { link:"#" , label: 'Home'},
        { link:"#" , label: 'About'},
        { link:"#" , label: 'Services'},
        { link:"#" , label: 'Contact'},
    ]
}

export let jumbotron = {
    title: 'A Warm Welcome!',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    button: {
        link: '#scroll',
        label: 'Call to action'
    }
}

export let card = {
        link:'https://picsum.photos/id/237/300',
        title: 'Card title',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        button: {
            label: 'Go somewhere', 
            ref:'#'
        }
}


export let footer = {
    text: 'Copyright \u00A9 Your Website 2022'
}