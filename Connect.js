class Connect {
    constructor() {
        this._init()
    }

    _init() {
        this.stack = []
    }

    use(fn) {
        this.stack.push(fn)
        return this
    }


    handle(req, res) {
        var tasks = this.stack
        console.log(this)

        var next = function(err) {
            if (err instanceof Error) {
                throw err
            }

            var currentTask = tasks.shift()
            if (currentTask) {
                currentTask(req, res, next)
            }
        }

        next()
    }

}



module.exports = Connect;