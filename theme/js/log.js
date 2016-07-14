/**
 *
 * @name: typewriter
 * @author: Alessandro Bellini <hello@ilmente.com>
 *
 */

'use strict'

const style = {
    header: 'font-size: 14px; font-weight: bold; color: #19A260',
    text: 'color: #AAAAAA',
    link: 'text-decoration: underline; color: #2199E8'
}

console.log('%cHello, code explorer!', style.header)
console.log('%cIf you want to actually take a look under the hood, go on github:', style.text)
console.log('%chttps://github.com/ilmente/ilmente.com', style.link)

