export default class RestoService{
    url = 'http://localhost:3000/menu/';

    getMenuItems = async () => {
        const response = await fetch(this.url);
        if (!response.ok){
            const error = 'server error';
            return error
        }
        const result = await response.json();
        return result;
    }
}
