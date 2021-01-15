export default class RestoService{
    // for development mode
    url = 'http://localhost:3000/menu/';
    // url = 'http://www.tkaproj.ho.ua/projects/restmenu/db.json'

    getMenuItems = async () => {
        const response = await fetch(this.url);
        if (!response.ok){
            const error = 'server error';
            return error
        }
        const result = await response.json();
        return result;
        // return result.menu;
    }
}
