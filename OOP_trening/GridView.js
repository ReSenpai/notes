
class GridView {
    /**
    * properties
    * @param [array] _tableClass - css classes
    * @param [array] data
    * @param [array] _attribute - Management of removal from the date
    * @param [array] _element - Where to display the table
    * @param [array] _header - Table headline
    * @param [array] _headerClass - css classes headline
    */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }

    /**
    * Method set header
    * 
    */

    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
    * Method set headerClass
    * 
    */

    set headerClass(headerClass) {
        if (typeof header === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
    * Method set element
    * 
    */

    set element(element) {
        if (document.querySelector(element)) {
            this._element = document.querySelector(element);
            return true;
        }
        return false;
    }

    /**
    * Method for show GridViewTable
    * 
    */

    render(data) {
        //show header
        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            })
            document.querySelector(this._element).append(header);
        }
        //show table
        const table = document.createElement('table');
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        })
        //create rable header
        let trHeader = document.createElement('tr');
        for (let key in this.attribute) {
            let th = document.createElement('th');
            if (this.attribute[key].label) {
                th.textContent = this.attribute[key].label;
            } else {
                th.textContent = key;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        //draw table
        for (let i = 0; i < this.data.length; i++) {
            let dataArr = this.data[i];
            let tr = document.createElement('tr');
            for (let key in this.attribute) {
                let td = document.createElement('td');
                let value = dataArr[key];
                // есть ли функция в value
                if (this.attribute[key].value) {
                    value = this.attribute[key].value(dataArr);
                }
                // атрибут src
                if (this.attribute[key].src) {
                    td.innerHTML = value;
                } else {
                    td.textContent = value;
                }
                tr.append(td);
            }
            table.append(tr)
        }
        document.querySelector(this._element).append(table);
    }
}