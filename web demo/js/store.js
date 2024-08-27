var list_sorted = [];

function loadDSSP(indexList)
{
    var store_contain = document.querySelector("#store_container");
    store_contain.innerHTML= '';


    if(indexList == "all")
    {
        var list_sp = JSON.parse(localStorage.getItem("list_sp")) || [];
        list_sorted = list_sp;
        for(var i=0;i<list_sorted.length;i++)
        {
            var new_sp = document.createElement('a');
            store_contain.appendChild(new_sp);
            new_sp.innerHTML = `
                <a href="sanpham.html" id="${list_sorted[i].id}" onclick="getItemID(${list_sorted[i].id})">
                    <div class="sanpham">
                        <img src="${list_sorted[i].img_link}" alt="" width="100%" height="70%">
                        <h4>${list_sorted[i].name}</h4>
                        <p>SKU: ${list_sorted[i].id}</p>
                        <p>Brand: ${list_sorted[i].brand}</p>
                        <p class="giasp">${list_sorted[i].price} VND</p>
                    </div>
                </a>
                `;
                
        }
        loadDSsort();
    }else{
        
        for(var i=0;i<indexList.length;i++)
        {
            var new_sp = document.createElement('a');
            store_contain.appendChild(new_sp);
            new_sp.innerHTML = `
                <a href="sanpham.html" id="${indexList[i].id}" onclick="getItemID(${indexList[i].id})">
                    <div class="sanpham">
                        <img src="${indexList[i].img_link}" alt="" width="100%" height="70%">
                        <h4>${indexList[i].name}</h4>
                        <p>SKU: ${indexList[i].id}</p>
                        <p>Brand: ${list_sorted[i].brand}</p>
                        <p class="giasp">${indexList[i].price} VND</p>
                    </div>
                </a>
                `;
        }
    }
}

function sortByBrand(index)
{
    list_sorted = [];
    var list_sp = JSON.parse(localStorage.getItem("list_sp")) || [];
    for(var i=0;i<list_sp.length;i++)
    {
        if(list_sp[i].brand == index)
        {
            list_sorted.push(list_sp[i]);
        }
    }
    loadDSSP(list_sorted);
}

function sortByPrice(sorter)
{
    
    for (let i = 1; i < list_sorted.length; i++) {
        let current = list_sorted[i];
        let j = i - 1;
        while (j >= 0 && list_sorted[j].price < current.price) {
            list_sorted[j + 1] = list_sorted[j];
            j--;
        }
        list_sorted[j + 1] = current;
    }

    if(sorter == "up")
    {
        list_sorted.reverse();
    }

    loadDSSP(list_sorted);
}

function loadDSsort()
{
    var list_sp = JSON.parse(localStorage.getItem("list_sp")) || [];
    var list_brand = [];

    for(var i=0; i<list_sp.length; i++)
    {
        var brand = list_sp[i].brand;
        list_brand.push(brand);
    }

    //lọc danh sách các brand bằng js filter
    var list_brand2 = list_brand.filter((item,index) => list_brand.indexOf(item) === index);


    var sort_contain = document.querySelector("#sort_container");
    for(var i=0; i<list_brand2.length; i++)
    {
        var bt = document.createElement('div');
        bt.innerHTML = 
            `
            <input type="button" value="${list_brand2[i]}" style="float: left; margin: 10px; padding: 10px; background-color: white;" onclick="sortByBrand('${list_brand2[i]}')">
            `
        sort_contain.appendChild(bt);
    }
}

function getItemID(id_index)
{
    localStorage.setItem('tempID', id_index);
}

function loadDSSPUser()
{
    var list_sp = JSON.parse(localStorage.getItem("list_sp")) || [];
    for(var i=0;i<list_sp.length;i++)
    {
        var new_sp = document.createElement('a');
        new_sp.setAttribute('href', 'sanpham.html');
        new_sp.setAttribute('id', list_sp[i].id);
        new_sp.setAttribute('onclick', 'getItemID(' + list_sp[i].id +')');
        new_sp.setAttribute('class', 'box');
        var user_contain = document.querySelector("#user_container");
        user_contain.appendChild(new_sp);
        new_sp.innerHTML = `
               <img src="${list_sp[i].img_link}" alt="" height="250px" width="250px" style="border-radius: 18px;"> 
               ${list_sp[i].name}
                <br>
                <div style="color: red; font-weight: bold;">${list_sp[i].price} vnd</div> 
            `;
            
    }
}
