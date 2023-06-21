/*
all HTML and CSS as JS string
*/

export default class MarkUpCode {

	// helper
	static getHtmlTemplate(source) {
		const t = document.createElement('template')
		t.innerHTML = source
		return t.content
	}

  static get(symbol) {
    return `
    <svg width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <circle id="background" fill="#cfdaf5" cx="256" cy="256" r="256" />
      ${this.getSymbol(symbol)}
    </svg>
    ${this.getCSS()}
    `
  }

  static getSymbol(symbol) {
    const symbols = {}
    symbols["close"] = this.getSymbolClose()
    symbols["lineChart"] = this.getSymbolLineChart()
    symbols["barChart"] = this.getSymbolBarChart()
    return symbols[symbol]
  }

  static getSymbolClose() {
    return `
    <g transform="scale(0.6, 0.6) translate(230 180)">
      <path id="symbol" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" fill="#0e47cb" stroke-width="0"/>
    </g>
    `
  }

  static getSymbolLineChart() {
    return `
    <g transform="scale(0.6, 0.6) translate(210 180)">
      <path id="symbol" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" fill="#0e47cb" stroke-width="0"/>
    </g>
    `
  }

  static getSymbolBarChart() {
    return `
    <g transform="scale(0.6, 0.6) translate(210 180)">
      <path id="symbol" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" fill="#0e47cb" stroke-width="0"/>
    </g>
    `
  }

  static getCSS() {
    return `
    <style>
    svg {
      --blue: #0e47cb;
      --yellowish: #b09121;
      --greyish: #cfdaf5;
    }

    svg:hover #background { fill:var(--blue); }
    svg:hover #symbol { fill:#ffffff; }
    </style>   
    `
  }

}