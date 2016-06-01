var app;
(function (app) {
    var formController = (function () {
        function formController($location, $stateParams, $scope) {
            this.$location = $location;
            this.$stateParams = $stateParams;
            this.$scope = $scope;
            this.showResult = false;
            this.formData = {
                name: '',
                age: 20,
                gender: 'male'
            };
            this.step = '1';
            this.dynamic = (this.$location.path() == '/form/steps/one') ? 0 : 100;
            var self = this;
            this.$scope.$on("$locationChangeSuccess", function handleLocationChangeSuccessEvent(event) {
                self.dynamic = (self.$location.path() == '/form/steps/one') ? 0 : 100;
            });
        }
        formController.prototype.processForm = function () {
            if (this.formData.name != "")
                this.showResult = true;
            else
                this.$location.path('/form/steps/one');
        };
        formController.$inject = ['$location', '$stateParams', '$scope'];
        return formController;
    }());
    app.formController = formController;
})(app || (app = {}));
