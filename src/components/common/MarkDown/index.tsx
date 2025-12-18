import './hlis.custom.scss';
import classNames from 'classnames';
import hljs from 'highlight.js';
import {marked} from 'marked';
import React, { ReactNode } from 'react';
import style from './index.module.scss'


interface IProps {
    content?: string;
    className?: string;
    children?: ReactNode;
}

marked.use({
    renderer: new marked.Renderer(),
    highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    gfm: true
});

//hightlight.js配置
hljs.configure({
    classPrefix: 'hljs-',
    languages: ['CSS', 'HTML', 'JavaScript', 'TypeScript', 'Markdown']
})

const MarkDown:React.FC<IProps> = ({content, className})=> {
    return(
        <div 
            className={classNames(style.marked, className)}
            dangerouslySetInnerHTML={{
                __html:marked(content || '').replace(/<pre>/g, "<pre id='hljs'>")
            }}
        />
    )
}

export default MarkDown;