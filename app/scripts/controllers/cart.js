function shoppingCart(cartName) {
    this.cartName = cartName;
    this.clearCart = false;
    this.items = [];
    // load items from local storage when initializing
    this.loadItems();
    // save items to local storage when unloading
    var self = this;
    $(window).unload(function () {
        if (self.clearCart) {
            self.clearItems();
        }
        self.saveItems();
        self.clearCart = false;
    });
}
// save items to local storage
shoppingCart.prototype.saveItems = function() {
  if (localStorage != null && JSON != null) {
    localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
  }
}
// load items from local storage
shoppingCart.prototype.loadItems = function() {
  var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
  if (items != null && JSON != null) {
    try {
      var items = JSON.parse(items);
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.quantity != null) {
            item = new cartItem(item.id, item.name, item.quantity);
            this.items.push(item);
        }
        }
      }
      catch (err) {
      // ignore errors while loading...
    }
  }
}

// clear the cart
shoppingCart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
}

shoppingCart.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
};

shoppingCart.prototype.addItem = function(id,name,quantity) {
    quantity = this.toNumber(quantity);
    if (quantity != 0) {
        // update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.id == id) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }
        if (!found) {
            var item = new cartItem(id, name, quantity);
            this.items.push(item);
        }
    this.saveItems();
    }
};

function cartItem(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity * 1;
}