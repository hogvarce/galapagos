module app {
    export class formController {
        static $inject = ['$location', '$stateParams', '$scope'];
        constructor(
            private $location,
            private $stateParams,
            private $scope
        ){
            var self = this;
            this.$scope.$on(
                    "$locationChangeSuccess",
                    function handleLocationChangeSuccessEvent( event ) {
                        self.dynamic = (self.$location.path() == '/form/steps/one') ? 0 : 100;
                    }
                );
        }

        showResult: boolean = false;

        formData: {} = {
            name: '',
            age: 20,
            gender: 'male'
        };
        step: string = '1';
        dynamic: number = (this.$location.path() == '/form/steps/one') ? 0 : 100;

        processForm():void{
            if (this.formData.name != "")
                this.showResult = true;
            else
                this.$location.path('/form/steps/one');
        }
    }
}
