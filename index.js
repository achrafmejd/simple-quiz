    const acc = document.getElementsByClassName("acc");
    // Expand onclick
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
    // Get hint
    const trueAnswers = [
        {
            part : "html",
            answers : {
                qst1 : "Mettre en forme du text",
                qst2 : "L'élément title",
                qst3 : "La balise p",
                qst4 : "La balise style",
                qst5 : "La balise script"
            },
            counter : 0
        },
        {
            part : "css",
            answers : {
                qst1 : "En utilisant le hashtag #",
                qst2 : "L'attribut background-color",
                qst3 : "display : none;",
                qst4 : "En utilisant les /* */",
                qst5 : "Aucun"
            },
            counter : 0
        },
        {
            part : "javascript",
            answers : {
                qst1 : "function",
                qst2 : "const",
                qst3 : "La méthod String.split()",
                qst4 : "for(declaration; condition; incrementation)",
                qst5: "String.toLowerCase()"
            },
            counter : 0
        }
    ]
    function hint(e) {
        const part = e.split(".")[0];
        const question = e.split(".")[1];
        trueAnswers.forEach(element => {
            // go to specific part
            if(element.part === part){
                // get the questions collections for that question
                const questionsCollection = document.getElementsByClassName(question);
                // check for each element of the collection if its default value is equal to the true value
                for (let q of questionsCollection) {
                    if(q.defaultValue === element.answers[question]){
                        // turn it to checked
                        q.checked = true;
                        return;
                    }
                }
            }
        });
    }

    
    const htmlInputs = document.getElementById('allHTML').getElementsByTagName('input');
    const cssInputs = document.getElementById('allCSS').getElementsByTagName('input');
    const jsInputs = document.getElementById('allJS').getElementsByTagName('input');
    const buttonValidate = document.getElementById('validate');

    

    function update(part) {
        let htmlCounter = 0;
        let cssCounter = 0;
        let jsCounter = 0;
        
        for(let hc of htmlInputs){
            if(hc.checked === true){
                htmlCounter++;
            }
        }
        for(let cc of cssInputs){
            if(cc.checked === true){
                cssCounter++;
            }
        }
        for(let jsc of jsInputs){
            if(jsc.checked === true){
                jsCounter++;
            }
        }

        console.log("html", htmlCounter);
        console.log("css", cssCounter);
        console.log("js", jsCounter);
        
        if(htmlCounter >= 1 && cssCounter >=1 && jsCounter >= 1){
            buttonValidate.disabled = false;
        }
    }


    