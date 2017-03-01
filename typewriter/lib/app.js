/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */
 
'use strict';

import $ from 'jquery';

const registeredComponentsMap = {};
const componentsMap = {};

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

function mountComponent(Component, name, el) {
    let $el = $(el);
    let key = $el.data('component-key');
    let component = new Component(name, key, $el);
    component.mounted();

    return component;
}

function mapComponent(component) {
    if (component.key) {
        if (componentsMap[component.key]) {
            throw 'error: component "' + component.name + '" already mapped with key "' + component.key + '"';
        }
        componentsMap[component.key] = component;
    }
}

export function register(name, Component) {
    if (!registeredComponentsMap[name]) {
        registeredComponentsMap[name] = Component;
    }

    return Component;
}

export function getComponentByKey(key) {
    return componentsMap[key] || null;
}

export function init() {
    let components = mountAllRegisteredComponents();

    components.forEach(component => component.init());
}

