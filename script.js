// got help from: https://github.com/oguzhanduran/JavaScript-ToDo-List-Homework-2-Patika.dev/
let btnDOM = document.querySelector("#liveToastBtn") // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let formDOM
let listDOM
let ullength = document.getElementsByTagName("li"); //burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.
for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span"); //close icon'u span etiketi içersinde olduğu için yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7"; // listede çarpı işaretini oluşturabilmek için "\u00D7" kullandık.
    closeButton.classList.add("close"); // bu butona close class'ını ekledik.
    closeButton.onclick = removeButton; // ve çarpı işaretine basınca removeButton fonsiyonunu çalıştırması gerektini söyledik.
    ullength[i].append(closeButton); // closeButton değişkenini ullength'in 0, 1, 2... indexlerine ekleyerek aslında for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik. 
    ullength[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik.
}

btnDOM.addEventListener('click', elemanEkle)  // addEventListener ile "click" dediğimiz için butona tıklandığında  elemanEkle fonksiyonu çalışacak.

function check() {
    this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton() {
    this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
}

// girdinin dolu olup olmadığına bakıyor.
function isEmpty(str) {
    return !str.trim().length;
}
function newElement() {
    listDOM = document.getElementById("list");
    formDOM = document.getElementById("task").value;
    // içi boş veya boşluk ile dolu olunca bu
    if (isEmpty(formDOM) == true){
        $(".error").toast("show");
    } else { // içi gerçekten dolu olunca bu
        $(".success").toast("show");
        let Listitem =  document.createElement("li");
        Listitem.innerHTML= formDOM;
        listDOM.appendChild(Listitem);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.classList = "close";
        span.appendChild(txt);
        Listitem.appendChild(span);
        Listitem.onclick = check;
        span.onclick = removeButton;
        liDOM.append(span);
        
    }
    document.getElementById("task").value = "";
}
// enter tuşuna basınca otomatik ekleme yapıyor.
document.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
      newElement();
    }
});