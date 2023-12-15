import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {
	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const bla = this.getAttribute("si")
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.get( this.getAttribute("symbol"), bla, bla )).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
	}
}

window.customElements.define('symbol-button', Element)
