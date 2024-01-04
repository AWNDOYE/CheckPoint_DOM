/*Traitement des icônes*/
var icone = document.querySelectorAll(".icon");
for (let i = 0; i < icone.length; i++) {
    let like = icone[i].children[0];
    let dislike = icone[i].children[1];
    like.addEventListener("click", function () {
        like.style.color = "blue";
        dislike.style.color = "black";
    });
    dislike.addEventListener("click", function () {
        dislike.style.color = "red";
        like.style.color = "black";
    });
    console.log(like, dislike);
}
/************************************************************************************************* */
//Liste des enfants de la classe Listeparfum / infoPrix / totalCourses
var selectorListeParfum = document.getElementsByClassName("Listeparfum"); 
var selectorInfoPanier = document.getElementsByClassName("infoPrix");
var selectorInfoTotalCourses = document.getElementsByClassName("totalCourses");
var totalpanier = document.querySelectorAll(".changePanier")
var selector_prixHTPanier, selector_prixSousTotalPanier
console.log(selectorInfoPanier[0].children);
console.log(selectorInfoTotalCourses[0].children);
var prixHT_Int, prixTotal, nbArticle, prixEnCours, prixTotalPanier, newArticle,divPanier
nbArticle  = 0
prixTotal = 0
prixEnCours = 0
prixTotalPanier = 0
for (let i = 0; i < selectorInfoPanier.length; i++) {
    //  prixHT = 0;
    prixHT_Int = 0;
    prixTotal = 0
    //****************Ajout et suppression quantité************************
    let selector_btnMoins = selectorInfoPanier[i].children[1].children[0];
    let selector_quantite = selectorInfoPanier[i].children[1].children[1];
    let selector_btnPlus = selectorInfoPanier[i].children[1].children[2];
    let qte = selector_quantite.value;
    qte = parseInt(qte)
    //console.log(alert(btnMoins , quantite , btnPlus));
    //****************Ajout et suppression nombre d'article dans le panier************************
    let selector_btndeleteCart = selectorInfoPanier[i].children[3].children[0];
    let selector_btndaddCart = selectorInfoPanier[i].children[3].children[1];
    // ************************** traiement diminution de la quantité*********************************
    selector_btnMoins.addEventListener("click", function () {
        if (qte > 1) {
            qte--;
        }
        selector_quantite.value = qte;
        selector_prixHTPanier = selectorInfoPanier[i].children[0].children[1];
        selector_prixSousTotalPanier = selectorInfoPanier[i].children[2].children[1];
        prixHT_Int = parseInt(selector_prixHTPanier.innerHTML);
        prixEnCours = prixHT_Int * qte
        // console.log(alert(prixEnCours));
        selector_prixSousTotalPanier.value = prixEnCours;
        prixTotal = prixTotal - prixEnCours
    });
    // ************************** traiement augmentation de la quantité*********************************
    selector_btnPlus.addEventListener("click", function () {
        qte++;
        selector_quantite.value = qte;
        selector_prixHTPanier = selectorInfoPanier[i].children[0].children[1];
        selector_prixSousTotalPanier = selectorInfoPanier[i].children[2].children[1];
        prixHT_Int = parseInt(selector_prixHTPanier.innerHTML);
        prixEnCours = prixHT_Int * qte
        //console.log(alert(prixEnCours));
        selector_prixSousTotalPanier.value = prixEnCours;
        prixTotal = prixTotal + prixEnCours
        //let monPrix = calculerSomme(prixEnCours)
        //console.log(alert(monPrix +" dow last"));
    });
    // ************************** traiement diminution du nombre d'articles au total dans le panier*********************************
    selector_btndeleteCart.addEventListener('click', function () {
        nbArticle = parseInt(selectorInfoTotalCourses[0].children[2].value)
        if (nbArticle >= 1) {
            nbArticle = parseInt(selectorInfoTotalCourses[0].children[2].value)
            prixTotalPanier = parseInt(selectorInfoTotalCourses[0].children[4].value)
            nbArticle = nbArticle - parseInt(selectorInfoPanier[i].children[1].children[1].value)
            prixTotalPanier = prixTotalPanier - parseInt(selectorInfoPanier[i].children[2].children[1].value)
            selectorInfoTotalCourses[0].children[2].value = parseInt(nbArticle)
            selectorInfoTotalCourses[0].children[4].value = parseInt(prixTotalPanier)
            //Suppression de la new div
            document.body.removeChild(divPanier)
        }
    })
    // ************************** traitement augmentation du nombre d'articles au total dans le panier*********************************
    selector_btndaddCart.addEventListener('click', function () {
        //console.log(alert(nbArticle));
        nbArticle += parseInt(selectorInfoPanier[i].children[1].children[1].value)
        if (prixTotal === 0) {
            selector_prixHTPanier = selectorInfoPanier[i].children[0].children[1];
            prixTotal = parseInt(selector_prixHTPanier.innerHTML);
        }
        prixTotalPanier += parseInt(selectorInfoPanier[i].children[2].children[1].value)
        selectorInfoTotalCourses[0].children[2].value = parseInt(nbArticle)
        selectorInfoTotalCourses[0].children[4].value = parseInt(prixTotalPanier)
        //Ajout d'une new div pour afficher l'info
        divPanier = document.createElement('div')
        divPanier.setAttribute('class', "newPanier")
        newArticle = document.createTextNode(nbArticle + " article(s) ajouté(s) au panier")
        divPanier.appendChild(newArticle)
        var main = document.getElementById('main')
        document.body.appendChild(divPanier)
        divPanier.style.fontStyle = "italic"
        divPanier.style.fontWeight = "700"
        divPanier.style.fontSize = "120%"
        divPanier.style.textAlign= "center"
        divPanier.style.marginTop = "0"
    })
}

