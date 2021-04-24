class DomElement{
    constructor(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
    }
    static create(){
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.innerHTML = 'hi';
        div.innerHTML = 'not hi';
        if (this.selector == '.'){
            document.body.appendChild(div);
        }
        else if (this.selector == '#'){
            document.body.appendChild(p);
        }
        document.body.style.height = height;
        document.body.style.width = width;
        document.body.style.background =bg;
        document.body.style.fontSize = fontsize;

    }
}

let d = new DomElement('.', '200px', '200px', '', '15px' );
d.create();
