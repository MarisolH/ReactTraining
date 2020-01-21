export default function isEmpty (obj){
    for (var keys in obj) {
        if (obj.hasOwnProperty(keys))
            return false;
    }
    return true;
}