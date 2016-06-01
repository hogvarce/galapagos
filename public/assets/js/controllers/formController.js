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
            var self = this;
        }
        formController.prototype.addProgress = function () {
            this.dynamic = 100;
        };
        formController.prototype.processForm = function () {
            this.addProgress();
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
