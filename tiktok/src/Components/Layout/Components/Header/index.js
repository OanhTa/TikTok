import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/Assets/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
//import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

function Header() {
    const [searchResult,setSearchResult] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 3000);
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"/>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        My tippy box
                    </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Gợi ý set đồ cho nữ' spellCheck={false}/>
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
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
