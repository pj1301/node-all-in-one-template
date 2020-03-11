const panel = document.querySelector('div.content-wrap');

class App {

  init() {
    const welcome = document.createElement('h2');
    welcome.innerText = 'Welcome to your App!';
    panel.append(welcome);
  }

}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded, initiating class...');
  const app = new App();
  app.init();
})
