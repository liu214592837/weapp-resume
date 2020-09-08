
import infoBehavior from '../../behaviors/info-behavior';
import event from '../events';

// Page 扩展
function extendPage(Page) {
    return (function (page) {
        page.behaviors = [infoBehavior].concat(page.behaviors || []);

        const { onLoad, onUnload } = page;
        page.onLoad = function (options) {
            // 添加事件函数支持 on, off, emit便于统一注销
            addEventExtension(this);

            if (typeof onLoad == 'function') {
                onLoad.call(this, options);
            }
        }

        page.onUnload = function () {
            // 卸载当前页面的event
            offEventOfContext(this);

            if (typeof onUnload == 'function') {
                onUnload.call(this);
            }
        }

        return Page(page)
    })
}

// Component 扩展
function extendComponent(Component) {
    return (function (component) {
        component.behaviors = [infoBehavior].concat(component.behaviors || []);

        // 初始化组件lifetimes
        if (!component.lifetimes) {
            component.lifetimes = {};
        }
        const { attached, detached, created } = component.lifetimes;

        component.lifetimes.created = function () {
            // 添加事件函数支持 on, off, emit便于统一注销
            addEventExtension(this);

            if (typeof created == 'function') {
                created.call(this);
            }

            if (typeof component.created == 'function') {
                component.created.call(this);
            }
        }

        component.lifetimes.detached = function () {
            // 统一注销事件
            offEventOfContext(this);

            if (typeof detached == 'function') {
                detached.call(this);
            }
        }

        return Component(component)
    })
}

// 添加事件扩展
function addEventExtension(ctx) {
    ctx.___events___ = [];

    // 监听
    ctx.on = function (key, func) {
        event.on(key, func, ctx);
        ctx.___events___.push({ key, func });
    }

    // 触发事件
    ctx.emit = function (key, param) {
        event.emit(key, param);
    }

    //注销事件
    ctx.off = function (key, func) {
        event.off(key, func);
    }
}

// 注销ctx上的事件
function offEventOfContext(ctx) {
    ctx.___events___.map(e => {
        event.off(e.key, e.func);
    });
    event.off('global:theme:change', ctx.setThemeColor);
}

const originalPage = Page;
const originalComponent = Component;

//重新定义Page
Page = extendPage(originalPage);
Component = extendComponent(originalComponent);

