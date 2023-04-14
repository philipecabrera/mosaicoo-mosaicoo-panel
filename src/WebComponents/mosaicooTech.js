
class MosaicooTech extends HTMLElement{
    constructor(){
        super()
        this.innerHTML = "este é o texto do webComponente"
    }
}
customElements.define("mosaicoo-tech",MosaicooTech)

