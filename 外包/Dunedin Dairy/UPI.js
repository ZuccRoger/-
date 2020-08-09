function handleTabClick(type) {
    switch (type) {
        case 'home': {
            document.querySelector('#DunedinDairy').style.display = "block"
            document.querySelector('#Products').style.display = "none"
            document.querySelector('#News').style.display = "none"
            document.querySelector('#Location').style.display = "none"
            document.querySelector('#GuestBook').style.display = "none"
            break
        }
        case 'cart': {
            // console.log('cart')
            document.querySelector('#DunedinDairy').style.display = "none"
            document.querySelector('#Products').style.display = "block"
            document.querySelector('#News').style.display = "none"
            document.querySelector("#Location").style.display = "none";
            document.querySelector("#GuestBook").style.display = "none";
            var xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/items', true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var productList = JSON.parse(xhr.responseText);
                    console.log(productList)
                    for (let i = productList.length - 1; i >= 0; i--) {
                        // console.log(productList[i])
                        let productItem = document.createElement('div')
                        productItem.setAttribute("class", "productItem")
                        productItem.innerHTML = `<img src="https://q2020.oss-cn-beijing.aliyuncs.com/itemimg.png" class="productImg" alt="" /><div><p>${productList[i].Title}</p><p>${productList[i].Origin}</p><button id=${productList[i].ItemId}>buy now</button></div>`
                        let hr = document.createElement("hr")
                        hr.style.width = "50%"
                        hr.style.height = "0.2px"
                        document.querySelector('.productList').appendChild(productItem);
                        document.querySelector('.productList').appendChild(hr)
                    }
                }
            };
            xhr.send();
            break
        }
        case 'news': {
            document.querySelector('#DunedinDairy').style.display = "none"
            document.querySelector('#Products').style.display = "none"
            document.querySelector('#News').style.display = "block"
            document.querySelector('#Location').style.display = "none"
            document.querySelector('#GuestBook').style.display = "none"
            var xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/news', true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var productList = JSON.parse(xhr.responseText);
                    // console.log(productList)
                    let newsList = document.querySelector('#newsList')
                    for (let i = 0; i < productList.length; i++) {
                        // console.log(productList[i])
                        let newsItem = document.createElement('div')
                        newsItem.setAttribute("class", "newsItem")
                        newsItem.innerHTML = `<img src=${productList[i].enclosureField.urlField} alt="" />
                        <div style="display:flex">
                            <div>
                          <a href=${productList[i].linkField}>${productList[i].titleField}</a>
                          </div> 
                          <div style="margin-left:20px">
                          <p>${productList[i].pubDateField}</p></div>
                        </div>
                        <p>${productList[i].descriptionField}</p>`
                        let hr = document.createElement("hr")
                        hr.style.width = "50%"
                        hr.style.height = "0.2px"
                        newsList.appendChild(newsItem);
                        newsList.appendChild(hr)
                    }
                }
            };
            xhr.send();
            break
        }
        case 'location': {
            document.querySelector('#DunedinDairy').style.display = "none"
            document.querySelector('#Products').style.display = "none"
            document.querySelector('#News').style.display = "none"
            document.querySelector('#Location').style.display = "block"
            document.querySelector('#GuestBook').style.display = "none"
            break;
        }
        case 'guest': {
            document.querySelector('#DunedinDairy').style.display = "none"
            document.querySelector('#Products').style.display = "none"
            document.querySelector('#News').style.display = "none"
            document.querySelector('#Location').style.display = "none"
            document.querySelector('#GuestBook').style.display = "block"
            var xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/htmlcomments', true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var productList = xhr.responseText.toString();
                    let recentList = document.querySelector('#recentList')
                    recentList.innerHTML = productList
                }
            };
            xhr.send();
            break
        }
    }
}

function submitForm() {
    let comment = document.querySelector('#comments').value;
    let name = document.querySelector('#recordName').value || "👩";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/comment?name=" + name, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", 'http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/htmlcomments', true);
            xhr2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr2.setRequestHeader('Accept', 'application/json');
            xhr2.onreadystatechange = function () {
                if (xhr2.readyState === 4 && xhr2.status === 200) {
                    document.querySelector('#comments').value = ''
                    document.querySelector('#recordName').value = ''
                    var productList = xhr2.responseText.toString();
                    let recentList = document.querySelector('#recentList')
                    recentList.innerHTML = productList
                }
            };
            xhr2.send();
        }
    };
    // console.log("" + comment + "")
    xhr.send(JSON.stringify(comment));
}

function hideSearchImg() {
    // console.log(document.querySelector('#productSearch').value)
}

function searchProduct(value) {
    // console.log('value', value)
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/search?term=${value}`, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
        document.querySelector('.productList').innerHTML = ''
        if (xhr.readyState === 4 && xhr.status === 200) {
            var productList = JSON.parse(xhr.responseText);
            // console.log(productList)
            for (let i = productList.length - 1; i >= 0; i--) {
                // console.log(productList[i])
                let productItem = document.createElement('div')
                productItem.setAttribute("class", "productItem")
                productItem.innerHTML = `<img src="https://q2020.oss-cn-beijing.aliyuncs.com/itemimg.png" class="productImg" alt="" /><div><p>${productList[i].Title}</p><p>${productList[i].Origin}</p><button id=${productList[i].ItemId}>buy now</button></div>`
                let hr = document.createElement("hr")
                hr.style.width = "50%"
                hr.style.height = "0.2px"
                document.querySelector('.productList').appendChild(productItem);
                document.querySelector('.productList').appendChild(hr)
            }
        }
    };
    xhr.send();
}