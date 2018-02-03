import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class CustomPipe implements PipeTransform{
    transform(value, args?){
        if(args){
            let filtered = value.filter(obj => {
                return obj.name.toLowerCase().indexOf(args.toLowerCase()) != -1;
            })
            return filtered;
        }
        else return value;
    }
}