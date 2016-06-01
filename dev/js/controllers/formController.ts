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

        addProgress():void{
            this.dynamic = 100;
        }

        processForm():void{
            this.addProgress();
            if (this.formData.name != "")
                this.showResult = true;
            else
                this.$location.path('/form/steps/one');
        }
    }
}
