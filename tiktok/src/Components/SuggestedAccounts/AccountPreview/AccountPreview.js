import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7e0327e8796057b92042e7e4b2e9caf1~c5_100x100.jpeg?x-expires=1703073600&x-signature=ZF%2BKbySdIm1SUDuEc3YjvSkuG0s%3D"
                    alt=""
                />
                <Button primary className={cx('button')}>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>thegrammargoat</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>The Grammar Goat 🐐</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.24 </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.24 </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
