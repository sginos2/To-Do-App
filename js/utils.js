class Utils {
    static getNewId(prefix) {
        return prefix + Math.random().toString(10).substr(2,10);
    }
}