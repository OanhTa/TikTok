
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as ProperWrapper } from '../Proper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AcountItem() {
    const renderPreview = (props) =>(
        <div  tabIndex="-1" {...props}> 
            <ProperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview/>
                </div>
            </ProperWrapper>
        </div>
    )
    return (
        <div>
            <Tippy
                interactive
                offset={[-20,0]}
                delay={[800,0]}
                render={renderPreview}
                placement='bottom'
            
            >
                <div className={cx('acount-item')}>
                    <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7e0327e8796057b92042e7e4b2e9caf1~c5_100x100.jpeg?x-expires=1703073600&x-signature=ZF%2BKbySdIm1SUDuEc3YjvSkuG0s%3D" alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>thegrammargoat</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>The Grammar Goat 🐐</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AcountItem;
