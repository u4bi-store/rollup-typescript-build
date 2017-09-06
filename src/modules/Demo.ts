import { Basic } from '../core/Basic';

export class Demo extends Basic{
    
    type : number;

    constructor(name, type){
        
        super(name);

        this.type = type;

    }
 
    render(){
        
        console.log('demo render', this.name, this.type);
            
    }

};