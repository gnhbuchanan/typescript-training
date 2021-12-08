const button = document.querySelector('button')!

const clickHandler = (message: string) => {
    console.log('clicked!' + message)
}

button.addEventListener('click', clickHandler.bind(null, 'message'))