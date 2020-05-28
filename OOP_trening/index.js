
const dataExample = [
    {
        company: 'Alfreds <b>Futterkiste</b>',
        chef: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        chef: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        chef: 'Roland Mendel',
        country: 'Australia'
    },
    {
        company: 'Island Trading',
        chef: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'SS company',
        chef: 'Re Senpai',
        country: 'Russia'
    }
]

let gridView = new GridView();
gridView.header = 'Hello';
gridView.headerClass = ['header', 'site-header'];
gridView.attribute = {
    company: {
        'label': 'Компания',
        'src': 'html'
    },
    chef: {
        'label': 'Директор'
    },
    country: {
        'label': 'Страна',
        'value': (data) => {
            if (data['country'] === 'Germany') {
                return['country'] + ' map';
            }
            return data['country'];
        }
    }
}
gridView.data = dataExample;
gridView.render();