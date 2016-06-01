module app {
    export class formController {
        static $inject = ['$location', '$stateParams'];
        constructor(
            private $location,
            private $stateParams
        ){
            var self = this;
        }

        showResult: boolean = false;

        formData: {} = {
            name: '',
            age: 20,
            gender: 'male'
        };

        dynamic: number = 0;
        max: number = 100;

        // addProgress():void{
        //     this.dynamic = 100;
        // }
        //
        // removeProgress():void{
        //     this.dynamic = 0;
        // }

        processForm():void{
            if (this.formData.name != "")
                this.showResult = true;
            else
                this.$location.path('/form/steps/one');
        }
    }
}
