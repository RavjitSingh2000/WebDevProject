let content = document.getElementsByClassName("dropDown");

            for (let i = 0; i < content.length; i++){
                content[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if (panel.style.display === "block"){
                        panel.style.display = "none";
                    }
                    else {
                        panel.style.display = "block";
                    }
                });
            }