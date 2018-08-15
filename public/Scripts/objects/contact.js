let objects;
(function () {
    class Contact {
        // your class definition goes here
        constructor(name = "", number = "", email = "", address = "") {
            this.name = name;
            this.number = number;
            this.email = email;
            this.address = address;
        }
    }

    objects.Contact = Contact;

})(objects || (objects = {}));