module.exports = function Router() {
  this.routes = {};
  this.curUrl = '';
  this.route = function(path, callback) {
    this.routes[path] = callback || function() {}
  }
  this.refresh = function() {
    var str = location.hash.slice(1) || '/'
    if (str.search('\\?')!= -1) {
      this.path = str.slice(0, str.search('\\?'))
      this.param = str.slice(str.search('\\?')+1)
      this.routes[this.path](this.param)
    }
    else
      this.routes[str]()
  }
  this.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false)
    window.addEventListener('hashchange', this.refresh.bind(this), false)
  }
}