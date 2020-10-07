import { g as getElement } from './index-14684944.js';
import { I as INVALID_ID_CHARACTERS_REGEX } from './constants-53c76d9d.js';

function format(first, middle, last) {
    return ((first || "") + (middle ? ` ${middle}` : "") + (last ? ` ${last}` : ""));
}
function scrollToElement(elementId, htmlView) {
    const selector = normalizeElementId(elementId);
    const chapterElm = htmlView.querySelector(`#${selector}`);
    if (!chapterElm) {
        return;
    }
    chapterElm.scrollIntoView();
    let basePath = window.location.href;
    let queryOperator = "?";
    if (basePath.indexOf("chapter=") !== -1) {
        basePath = window.location.href.split("chapter=")[0];
        if (basePath.length > 0) {
            queryOperator = basePath[basePath.length - 1];
            basePath = basePath.substring(0, basePath.length - 1);
        }
    }
    else {
        queryOperator = basePath.indexOf("?") > 0 ? "&" : "?";
    }
    let chapterKey = `${queryOperator}chapter=`;
    window.history.pushState({}, "", `${basePath}${chapterKey}${selector}`);
}
//TODO refactor this
/**
 * @deprecated You should create your own Event. See /events/PskButtonEvent.ts example
 * @param eventName
 * @param options
 * @param trigger
 * @param triggerElement
 */
function createCustomEvent(eventName, options, trigger = false, triggerElement = null) {
    const customEvent = new CustomEvent(eventName, options);
    if (trigger) {
        if (triggerElement) {
            triggerElement.dispatchEvent(customEvent);
        }
        else {
            document.dispatchEvent(customEvent);
        }
    }
}
function closestParentElement(el, selector, stopSelector) {
    let retval = null;
    while (el) {
        if (el.matches(selector)) {
            retval = el;
            break;
        }
        else if (stopSelector && el.matches(stopSelector)) {
            break;
        }
        el = el.parentElement;
    }
    return retval;
}
function closestParentTagElement(el, tag, deepLevel = 1) {
    let retval = null;
    while (el) {
        if (el.tagName.toLowerCase() === tag && --deepLevel === 0) {
            retval = el;
            break;
        }
        el = el.parentElement;
    }
    return retval;
}
function normalizeInnerHTML(source = "") {
    return source.replace(/<!----->/g, "").replace(/<!---->/g, "");
}
function normalizeCamelCaseToDashed(source) {
    if (!source || typeof source !== 'string' || source.length === 0) {
        return '';
    }
    return source
        .split("")
        .map((letter) => {
        if (letter === letter.toLowerCase()) {
            return letter;
        }
        return `-${letter.toLowerCase()}`;
    })
        .join("");
}
function normalizeDashedToCamelCase(source) {
    if (!source || typeof source !== 'string' || source.length === 0) {
        return '';
    }
    return source
        .split("-")
        .map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
        .join("");
}
/**
 * normalize a string to be compliant with a HTML id value
 * @param source
 */
function normalizeElementId(source) {
    let normalizedId = source.replace(INVALID_ID_CHARACTERS_REGEX, "-").toLowerCase();
    normalizedId = normalizedId.replace(/(-+){2}/gm, "-");
    normalizedId = normalizedId.replace(/(-+)$/gm, "");
    return normalizedId;
}
/**
 *
 * @param source
 * @param regex
 * @param replaceString
 * @param applyCallback - A callback function that will be applyed to the string result
 */
function normalizeRegexToString(source, regex, replaceString, applyCallback = null) {
    let result = source.replace(regex, replaceString);
    if (applyCallback) {
        return applyCallback(result);
    }
    return result;
}
function canAttachShadow(tagName) {
    if (tagName.startsWith("psk-")) {
        return true;
    }
    const found = [
        "article",
        "aside",
        "blockquote",
        "body",
        "div",
        "footer",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "main",
        "nav",
        "p",
        "section",
        "span"
    ].find((htmlTag) => htmlTag === tagName);
    return found === tagName;
}
function normalizeModelChain(chain) {
    if (typeof chain !== "string") {
        throw new Error("Invalid model chain");
    }
    return chain.split("@").join("");
}
function stringToBoolean(str) {
    if (typeof str === "boolean") {
        return str;
    }
    if (typeof str === "string") {
        switch (str.toLowerCase().trim()) {
            case "true":
            case "1":
                return true;
            case "false":
            case "0":
            case null:
                return false;
            default:
                return Boolean(str);
        }
    }
    return Boolean(str);
}
function dashToCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}
function getInnerHTML(component) {
    const host = getElement(component);
    if (!host.innerHTML) {
        return null;
    }
    let styleElement = host.querySelector('style');
    if (styleElement) {
        let content = host.innerHTML.replace(styleElement.outerHTML, "");
        host.innerHTML = styleElement.outerHTML;
        return content;
    }
    return host.innerHTML;
}
;

export { normalizeModelChain as a, normalizeElementId as b, createCustomEvent as c, dashToCamelCase as d, closestParentTagElement as e, scrollToElement as f, getInnerHTML as g, closestParentElement as h, normalizeRegexToString as i, normalizeDashedToCamelCase as j, normalizeCamelCaseToDashed as n, stringToBoolean as s };