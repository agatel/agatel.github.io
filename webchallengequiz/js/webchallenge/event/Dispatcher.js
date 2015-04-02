var Dispatcher = {
    dispatcher : null,
    getInstance : function(){
        if(this.dispatcher == null){
            this.dispatcher = publisher.noConflict();
        }
        return this.dispatcher;
    }
};