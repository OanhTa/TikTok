import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/Components/Button';
import images from '~/Assets/Images';
import styles from './Header.module.scss';
import { Wrapper as ProperWrapper } from '~/Components/Proper';
import AccountsItem from '~/Components/AccountItem';

//import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok" />
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                            </ProperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Gợi ý set đồ cho nữ" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* Closed */}
                            <FontAwesomeIcon className={'clear'} icon={faCircleXmark} />
                        </button>

                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            {/* Search */}
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
