'use strict';

import $ from 'jquery';

/**
 * registered component
 * mapped by name
 */
const registeredComponentsMap = {};

/**
 * mounted component
 * mapped by key (when provided)
 */
const componentsMap = {};

/**
 * @private
 *
 * @returns {Array}
 *
 * mount a component for every html element
 * that matches '[data-component="component-name"]' selector
 */
function mountAllRegisteredComponents() {
    let components = [];

    Object.keys(registeredComponentsMap).forEach(name => {
        let Component = registeredComponentsMap[name];
        let $elements = $('[data-component="' + name + '"]');

        $elements.each(function(index, el) {
            let component = mountComponent(Component, name, el);
            components.push(component);
            mapComponent(component);
        });
    });

    return components;
}

/**
 * @private
 *
 * @param {Component} Component
 * @param {string} name
 * @param {HTMLElement} el
 * @returns {Component}
 *
 * create a single component for a specific html element
 */
function mountComponent(Component, name, el) {
    let $el = $(el);
    let key = $el.data('component-key');
    let component = new Component(name, key, $el);
    component.mounted();

    return component;
}

/**
 * @private
 *
 * @param {Component} component
 *
 * map the component if it has a '[data-component-key="value"]'
 * a mapped component can be retrieved using getComponentByKey(key)
 */
function mapComponent(component) {
    if (component.key) {
        if (componentsMap[component.key]) {
            throw 'error: component "' + component.name + '" already mapped with key "' + component.key + '"';
        }
        componentsMap[component.key] = component;
    }
}

/**
 * @public
 *
 * @param {string} name
 * @param {Component} Component
 * @returns {Component}
 *
 * register the component for app init
 */
export function register(name, Component) {
    if (!registeredComponentsMap[name]) {
        registeredComponentsMap[name] = Component;
    }

    return Component;
}

/**
 * @public
 *
 * @param {string} key
 * @returns {Component|null}
 *
 * allow access to a key-mapped component
 */
export function getComponentByKey(key) {
    return componentsMap[key] || null;
}

/**
 * @public
 *
 * mount and initialize all the registered components
 * then start the app
 */
export function init() {
    let components = mountAllRegisteredComponents();

    components.forEach(component => component.init());
}

