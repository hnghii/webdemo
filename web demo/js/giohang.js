var list_cart = JSON.parse(localStorage.getItem("list_cart")) || [];

function napsp()
{
    var t = document.getElementById("datarow");
    t.innerText="";
    for(var i=0;i<list_cart.length;i++)
    {
        var motsp = list_cart[i];
        var tr=document.createElement("tr");
        t.appendChild(tr);
        tr.innerHTML=`
        <td class="ma">${motsp.id}</td>
        <td class="hinh"><img src="${motsp.img_link}" style="width: 200px; height: 200px"></td>
        <td class="ten">${motsp.name}</td>
        <td class="soluong">
            <input type="number" value="${motsp.count}" onchange="suasoluong(${i},this.value)" style="width:30px"></input>
        </td>
        <td class="gia">${motsp.price} vnđ</td>
        <td class="tong">${motsp.price*motsp.count} vnđ</td>
        <td class="xoa"><button onclick="xoasp(${i})">xoa</button></td>
        `;
        tinhtongtien();
    }
}

function suasoluong(index, value)
{
    if(value>0) list_cart[index].count = value;
    else{
        value = 1;
        list_cart[index].count = value;
    }
    napsp();
}

function xoasp(index)
{
    list_cart.splice(index, 1);
    localStorage.setItem("list_cart", JSON.stringify(list_cart));
    napsp();
    tinhtongtien();
}

function tinhtongtien()
{
    var tong = 0;
    for(var i=0;i<list_cart.length;i++)
    {
        var motsp = list_cart[i];
        var tonggia = motsp.count*motsp.price;
        tong += tonggia;
    }
    document.getElementById("tongtien1").innerText=tong + " vnd";
}

function Payment()
{
    var tongtien = document.getElementById("tongtien1").innerText;
    if (confirm("Bạn đang tiến hành thanh toán toàn bộ giỏ hàng trị giá " + tongtien + ". Bấm OK để xác nhận")) {
        list_cart = [];
        localStorage.setItem("list_cart", JSON.stringify(list_cart));
        napsp();
        tinhtongtien();
        alert("Đơn hàng của bạn đang được chờ duyệt. Nhân viên sẽ tiến hành liên hệ với bạn qua số điện thoại lưu trong tài khoản để xác nhận địa chỉ và phương thức thanh toán. Thank you");
    }else{
        
    }
}