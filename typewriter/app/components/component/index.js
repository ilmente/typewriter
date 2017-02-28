'use strict';

export default class Component {

    /**
     * constructor
     * @param {string} name
     * @param {string} key
     * @param {jquery} $el
     *
     * this method should not be overwritten
     * as it's used to mount the component
     * use init() instead
     */
    constructor(name, key, $el) {
        this.name = name;
        this.key = key;
        this.$el = $el;
    }

    /**
     * init
     *
     * called after this component is mounted
     */
    mounted() {}

    /**
     * init
     *
     * called after all components are mounted
     */
    init() {}

}
