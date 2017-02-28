'use strict';

import $ from 'jquery';
import Component from '../component';
import { register } from 'lib/app';

const style = {
    header: 'font-size: 14px; font-weight: bold; color: #19A260',
    text: 'color: #AAAAAA',
    link: 'text-decoration: underline; color: #2199E8'
}

class Log extends Component {

    init() {
        console.log('%cHello, code explorer!', style.header)
        console.log('%cIf you want to actually take a look under the hood, go on github:', style.text)
        console.log('%chttps://github.com/ilmente/typewriter', style.link)
    }

}

export default register('log', Log);
