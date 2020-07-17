import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle="Harika Calculator";

    weight;
    height;

    @track bmi;
    onWeightHandler(event){
        this.weight=parseFloat(event.target.value);
    }
    onHeightChange(event){
        this.height=parseFloat(event.target.value);
    }
    changeValueHandler(){
        try {
            this.bmi=this.weight/(this.height*this.height);    
        } catch (error) {
            this.bmi=undefined;
        }
    }
    get bmiValue(){
        if(this.bmi === undefined){
            return "";
        }
        return 'Your BMI is :${this.bmi}';
    }
}