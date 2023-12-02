import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as ProperWrapper } from '~/Components/Proper';
import Header from './Header';
import MenuItem from './Menuitem';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children; //boolean
            return (
                <MenuItem
                    key={index}
                    data={item} //render: data.title
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]); //[{data}, {children}]-> curr = children
                        } else {
                            onChange(item); //là hàm -not sự kiện
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive={true}
            offset={[12,8]}
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                    //bỏ pt cuối
                                }}
                            />
                        )}
                        {renderItem()}
                    </ProperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
