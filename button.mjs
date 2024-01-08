import MarkUpCode from  "./markUpCode.mjs"		// keep this file html/css free


class Element extends HTMLElement {
	constructor() {	
		super()	
		this.attachShadow({mode: 'open'})
		const size = this.getAttribute("size")
		const tmp = MarkUpCode.getHtmlTemplate(MarkUpCode.get( this.getAttribute("symbol"), size, size )).cloneNode(true)
		this.shadowRoot.appendChild(tmp)
		this.#init()
	}

	#init() {
		this.shadowRoot.firstElementChild.addEventListener("click", (ev) => {
			ev.stopPropagation()
			const event = new Event("action")
			this.dispatchEvent(event)
		})
		this.shadowRoot.addEventListener("keyup", (ev) => {
			if(ev.key=="Enter") {
				ev.stopPropagation()
				const event = new Event("action")
				this.dispatchEvent(event)
			}
		})

	}


}

window.customElements.define('symbol-button', Element)
