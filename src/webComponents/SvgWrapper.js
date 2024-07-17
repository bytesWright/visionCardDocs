import DOMPurify from 'dompurify';


// noinspection JSUnusedGlobalSymbols
/**
 * Custom element to load and display SVG content from a URL or raw SVG string.
 * @extends HTMLElement
 */
export class SvgWrapper extends HTMLElement {
    /**
     * Default tag name for the custom element.
     * @type {string}
     */
    static defaultTagName = "svg-wrapper";

    /**
     * Attributes observed by the custom element.
     * @type {string[]}
     */
    static observedAttributes = ["href"];

    constructor() {
        super();
    }


    /**
     * Lifecycle method called when observed attributes change.
     * Loads SVG content based on the 'href' attribute change.
     * @param {string} name - The name of the attribute that changed.
     * @param {string} oldValue - The previous value of the attribute.
     * @param {string} newValue - The new value of the attribute.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        fetchSVG(newValue).then(svg => {
            this.appendChild(svg);
        }).catch(error => {
            console.error('Error fetching or parsing SVG:', error);
        });
    }
}


/**
 * Fetches SVG content from a URL or raw SVG string, and returns a sanitized SVG element.
 * @param {string} url - The URL or raw SVG string to fetch and parse.
 * @returns {Promise<SVGElement>} - Promise resolving to the sanitized SVG element.
 * @throws {ResponseError} If the status code is not 200.
 * @throws {Error} If the SVG format is invalid or the backend does not respond.
 */
async function fetchSVG(url) {
    let response;

    try {
        response = await fetch(url);
    } catch (e) {
        throw new Error(`Error fetching SVG from [${url}]. ${e.message}`)
    }

    if (!response.ok) {
        throw new ResponseError(`Error fetching SVG from [${url}].`, response);
    }

    const svgText = await response.text();
    const sanitizedSVGText = DOMPurify.sanitize(svgText); // Sanitize SVG content

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(sanitizedSVGText, 'image/svg+xml');

    if (!svgDoc.documentElement || svgDoc.documentElement.nodeName !== 'svg') {
        throw new Error(`Invalid SVG from from [${url}]. Got ${svgDoc.documentElement.nodeName} instead`);
    }

    return svgDoc.documentElement;
}


/**
 * Custom error class that extends the built-in Error class
 * and includes a property to store a response object.
 */
class ResponseError extends Error {
    /**
     * Constructs a ResponseError instance.
     * @param {string} message - Error message.
     * @param {Response} response - Response object associated with the error.
     */
    constructor(message, response) {
        super(message);
        this.name = this.constructor.name;
        this.response = response; // Store the response object
    }
}