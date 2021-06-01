const kebabize = str => {
    return str.split('').map((letter, idx) => {
      return letter.toUpperCase() === letter
       ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
       : letter;
    }).join('');
 }
 
function compile(obj){
    if (obj !== undefined){
    prop = "";
    Object.keys(obj).forEach(function(key) {
        if (key === "css"){
            des = "";
            Object.keys(obj["css"]).forEach(function(nkey) {
                des = des + "" + kebabize(nkey) + ":" + obj["css"][nkey] + ";";
             });
             prop = prop + " style='" + des + "'";
        }else{
        prop = prop + " " + key + "='" + obj[key] + "'";
        }
      });
      return prop;
    }else{
        return "";
    }
}

const tml = {
    div: (props, val) => {
        return (`<div` + compile(props) + `>` + val + `</div>`);
    },
    input: (props) => {
        return (`<input` + compile(props) + `>`);
    },
    br: (prop) => {
        return prop == undefined ? `<br>` : `<br` + compile(prop) + `/>`
    },
    section: (props, val) => {
        return (`<section` + compile(props) + `>` + val + `</section>`);
    },
    p: (props, val) => {
        return (`<p` + compile(props) + `>` + val + `</p>`);
    },
    img: (props) => {
        return (`<img` + compile(props) + `/>`);
    },
    a: (props, val) => {
        return (`<a` + compile(props) + `>` + val + `</a>`);
    },
    ul: (props, val) => {
        return (`<ul` + compile(props) + `>` + val + `</ul>`);
    },
    ol: (props, val) => {
        return (`<ol` + compile(props) + `>` + val + `</ol>`);
    },
    li: (props, val) => {
        return (`<li` + compile(props) + `>` + val + `</li>`);
    },
    form: (props, val) => {
        return (`<form` + compile(props) + `>` + val + `</form>`);
    },
    textarea: (props, val) => {
        return (`<textarea` + compile(props) + `>` + val + `</textarea>`);
    },
    button: (props, val) => {
        return (`<button` + compile(props) + `>` + val + `</button>`);
    },
    marquee: (props, val) => {
        return (`<marquee` + compile(props) + `>` + val + `</marquee>`);
    }
}