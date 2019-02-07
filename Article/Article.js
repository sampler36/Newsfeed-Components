// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textcontent = 'expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click)', this.expandArticle.bind(this));


    this.closeButton = this.domElement.querySelector('.closeButton');
    this.closeButton.textcontent = 'Close';
    this.closeButton.addEventListener('click)', this.closeArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    for(let i = 0; i< articles.length; i++){
      console.log(articles[i]);
      articles[i].classList.remove('article-open');
    }

     this.domElement.classList.toggle('article-open');
  }
  closeArticle(){
    this.domElement.classList.remove('article-open');
  }
}
/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

const articles = domElement.querySelectorAll('.articles');
    articles.forEach( article => {
      return new Article(article);
    })

// class Panel {
//     constructor(panel){
//       this.panel = panel;
//       this.heading = this.panel.querySelector('.panel-content h3');
//       this.content = this.panel.querySelector('.panel-content p');
//       console.log(this.heading);
//       // Non-arrow function 
//       //this.heading.addEventListener('click', this.togglePanel.bind(this));
//       this.heading.addEventListener('click', (e) => this.togglePanel(e));
//     }
//     // Methods
//     togglePanel(e) {
//       // only need the event object if we are using it***
//       console.log(e.target);
//       this.content.classList.toggle('toggle-on');
//     }
//   }
  
//   const panels = document.querySelectorAll('.panel');
  
//   panels.forEach( panel => {
//     return new Panel(panel);  
//   });
  
  // panels = Array.from(panels).map( panel => {
  //   return new Panel(panel);
  // })
  