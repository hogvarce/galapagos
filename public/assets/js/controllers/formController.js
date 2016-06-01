var app;
(function (app) {
    var formController = (function () {
        function formController($location, $stateParams) {
            this.$location = $location;
            this.$stateParams = $stateParams;
            this.showResult = false;
            this.formData = {
                name: '',
                age: 20,
                gender: 'male'
            };
            this.dynamic = 0;
            this.max = 100;
            var self = this;
        }
        // addProgress():void{
        //     this.dynamic = 100;
        // }
        //
        // removeProgress():void{
        //     this.dynamic = 0;
        // }
        formController.prototype.processForm = function () {
            if (this.formData.name != "")
                this.showResult = true;
            else
                this.$location.path('/form/steps/one');
        };
        formController.$inject = ['$location', '$stateParams'];
        return formController;
    }());
    app.formController = formController;
})(app || (app = {}));
