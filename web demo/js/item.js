    function loadItem()
    {
        var id = localStorage.getItem('tempID');
        var name = document.querySelector("#this_name");
        var price = document.querySelector("#this_price");
        var brand = document.querySelector("#this_brand");
        var more = document.querySelector("#this_more");
        var img = document.querySelector("#this_img");

        var list_sp = JSON.parse(localStorage.getItem("list_sp")) || [];
        for(var i=0; i<list_sp.length; i++)
        {
            if(list_sp[i].id == id)
            {
                name.innerText = list_sp[i].name;
                price.innerText = list_sp[i].price + " VND";
                brand.innerText = list_sp[i].brand;
                more.innerText = list_sp[i].more;
                img.setAttribute('src', list_sp[i].img_link);
            }
        }
    }

    function addToCart()
    {
        var id = localStorage.getItem('tempID');
        var list_sp = JSON.parse(localStorage.getItem("list_sp")) || [];
        var list_cart = JSON.parse(localStorage.getItem("list_cart")) || [];
        var duplicate_check = false;
        for(var i=0; i<list_sp.length; i++)
        {
            if(list_sp[i].id == id)
            {
                var cartSP = list_sp[i];
                for(var j=0;j<list_cart.length;j++)
                {
                    if(cartSP.id == list_cart[j].id)
                    {
                        duplicate_check = true;
                        break;
                    }
                }
                if(!duplicate_check)
                {
                    var newSPCart = {
                        id: cartSP.id,
                        brand: cartSP.brand,
                        name: cartSP.name,
                        price: cartSP.price,
                        img_link: cartSP.img_link,
                        more: cartSP.more,
                        count: 1
                    }
                    list_cart.push(newSPCart);
                    localStorage.setItem("list_cart", JSON.stringify(list_cart));
                    alert("Đã thêm sản phẩm " + list_sp[i].name + " vào giỏ hàng!");
                }else{
                    alert("Đã có sản phẩm này trong giỏ hàng rồi!")
                }
            }
        }

        
                    
        
    }