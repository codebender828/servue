/**
 * @jest-environment node
 */
const path = require("path")
const axios = require("axios")
const Renderer = require("../lib")
var renderer = new Renderer()
renderer.resources = path.resolve(__dirname, "resources")
renderer.nodemodules = path.resolve(__dirname,'../node_modules')

async function log(){
    console.log(await render())
}

async function render(){
    var response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    var html = await renderer.render("home", {
        info: response.data,
        msg: "Lala!",
        messageOuter: "Nla Nla"
    })
    return html
}

log()